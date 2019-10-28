<?php

namespace Tests\Feature\Publication;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EventsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->signIn();
    }

    /** @test */
    public function can_get_events_list()
    {
        $event1 = factory(Event::class)->create();
        $event2 = factory(Event::class)->create();
        $event3 = factory(Event::class)->create();

        $this->getJson(route('publication.events.index'))
            ->assertJsonFragment(['title' => $event1->title])
            ->assertJsonFragment(['title' => $event2->title])
            ->assertJsonFragment(['title' => $event3->title]);
    }

    /** @test */
    public function can_create_events()
    {
        $this->postJson(route('publication.events.store'), [
            'title'         =>  $title = 'Laravel PH Meetup',
            'description'   =>  $description = 'Some sort of meetup.',
            'event_date'    =>  $date = Carbon::now()->addDays(30)->format('Y-m-d H:i'),
            'published'     =>  false,
        ]);

        $this->assertDatabaseHas('events', [
            'title'         =>  $title,
            'description'   =>  $description,
            'event_date'    =>  $date,
            'published_at'  =>  null,
            'publisher_id'  =>  null,

        ]);
    }

    /** @test */
    public function can_get_event_details()
    {
        $event = factory(Event::class)->create();

        $this->getJson(route('publication.events.show', [
            'event' => $event->id
        ]))->assertJsonFragment([
            'title'         =>  $event->title,
            'description'   =>  $event->description,
        ]);
    }

    /** @test */
    public function can_update_an_event()
    {
        $event = factory(Event::class)->create();

        $this->patchJson(
            route('publication.events.update', [
                'event' =>  $event->id,
            ]),
            [
                'title'         =>  $title = 'Laravel PH Meetup',
                'description'   =>  $description = 'Some sort of meetup.',
                'event_date'    =>  $date = Carbon::now()->addDays(30)->format('Y-m-d H:i'),
                'published'     =>  true,
                'publisher'     =>  Auth::id(),
            ]
        );

        $this->assertDatabaseHas('events', [
            'id'                =>  $event->id,
            'title'             =>  $title,
            'description'       =>  $description,
            'event_date'        =>  $date,
            'published_at'      =>  Carbon::now()->format('Y-m-d H:i:s'),
            'publisher_id'      =>  Auth::id(),
        ]);
    }
}
