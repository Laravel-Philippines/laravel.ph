<?php

namespace Tests\Feature\Loaders;

use Tests\TestCase;
use App\Models\User;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Filters\EventFilters;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Feature\Concerns\InteractsWithQueryFilters;

class EventLoadersTest extends TestCase
{
    use InteractsWithQueryFilters,
        RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();
    }

    /** @test */
    public function can_load_publishers()
    {
        $user = factory(User::class)->create();

        $event = factory(Event::class)->create(['publisher_id' => $user->id]);

        $response = $this->setRequestFilters(
            Event::class,
            EventFilters::class,
            ['load' => 'publisher']
        );

        $response = $this->setResponseContent($response)
            ->assertJsonFragment(['name' => $user->name]);
    }
}
