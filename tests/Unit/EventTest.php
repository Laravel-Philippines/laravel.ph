<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Event;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class EventTest extends TestCase
{
    protected function setUp() : void
    {
        parent::setUp();

        $this->event = new Event;
    }

    /** @test */
    public function it_belongs_to_many_sponsors()
    {
        $this->assertInstanceOf(BelongsToMany::class, $this->event->sponsors());
    }

    /** @test */
    public function it_belongs_to_a_publisher()
    {
        $this->assertInstanceOf(BelongsTo::class, $this->event->publisher());
    }
}
