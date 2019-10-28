<?php

namespace Tests\Feature\Publication;

use Tests\TestCase;
use App\Models\Sponsor;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SponsorsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp() : void
    {
        parent::setUp();

        $this->signIn();
    }

    /** @test */
    public function can_get_sponsors_list()
    {
        $sponsor1 = factory(Sponsor::class)->create();
        $sponsor2 = factory(Sponsor::class)->create();
        $sponsor3 = factory(Sponsor::class)->create();

        $this->getJson(route('publication.sponsors.index'))
            ->assertJsonFragment(['name' => $sponsor1->name])
            ->assertJsonFragment(['name' => $sponsor2->name])
            ->assertJsonFragment(['name' => $sponsor3->name]);
    }

    /** @test */
    public function can_create_sponsors()
    {
        $this->postJson(
            route('publication.sponsors.store'),
            [
                'name'          =>  $name = 'Company ABC',
                'description'   =>  $description = 'Some description here..',
                'website'       =>  $website = 'https://google.com',
            ]
        );

        $this->assertDatabaseHas('sponsors', [
            'name'          =>  $name,
            'description'   =>  $description,
            'website'       =>  $website,
        ]);
    }

    /** @test */
    public function can_get_a_sponsor_details()
    {
        $sponsor = factory(Sponsor::class)->create();

        $this->getJson(route('publication.sponsors.show', ['sponsor' => $sponsor->id]))
            ->assertJsonFragment(['name' => $sponsor->name]);
    }

    /** @test */
    public function can_update_an_existing_sponsor()
    {
        $sponsor = factory(Sponsor::class)->create();

        $this->patchJson(
            route('publication.sponsors.update', ['sponsor' => $sponsor->id]),
            [
                'name'          =>  $name = 'Updated sponsor name..',
                'description'   =>  $description = 'Updated description..',
                'website'       =>  $website = 'https://laravelph.org',
            ]
        );

        $this->assertDatabaseHas('sponsors', [
            'id'            =>  $sponsor->id,
            'name'          =>  $name,
            'description'   =>  $description,
            'website'       =>  $website,
        ]);
    }
}
