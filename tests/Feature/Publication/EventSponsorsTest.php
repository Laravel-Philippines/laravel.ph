<?php

namespace Tests\Feature\Publication;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\Event;
use App\Models\Sponsor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EventSponsorsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->signIn();
    }

    /** @test */
    public function can_attach_many_sponsor_to_an_event()
    {
        $event = factory(Event::class)->create();

        $sponsor1 = factory(Sponsor::class)->create();
        $sponsor2 = factory(Sponsor::class)->create();
        $sponsor3 = factory(Sponsor::class)->create();

        $this->patch(
            route('publication.events.update', ['event' => $event->id]),
            [
                'title'         =>  $title = 'Laravel PH Meetup',
                'description'   =>  $description = 'Some sort of meetup.',
                'event_date'    =>  $date = Carbon::now()->addDays(30)->format('Y-m-d H:i'),
                'published'     =>  true,
                'publisher'     =>  Auth::id(),
                'sponsors'      =>  [$sponsor1->id, $sponsor2->id, $sponsor3->id],
            ]
        );

        $this->assertDatabaseHas('event_sponsor', [
            'event_id'      =>  $event->id,
            'sponsor_id'    =>  $sponsor1->id,
        ]);

        $this->assertDatabaseHas('event_sponsor', [
            'event_id'      =>  $event->id,
            'sponsor_id'    =>  $sponsor2->id,
        ]);

        $this->assertDatabaseHas('event_sponsor', [
            'event_id'      =>  $event->id,
            'sponsor_id'    =>  $sponsor3->id,
        ]);
    }
}
