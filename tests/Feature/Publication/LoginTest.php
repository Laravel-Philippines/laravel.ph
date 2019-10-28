<?php

namespace Tests\Feature\Publication;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function publishers_can_login()
    {
        $user = factory(User::class)->create();

        $response = $this->post(route('login'), [
            'email'     =>  $user->email,
            'password'  =>  'secret',
        ]);

        $this->assertAuthenticatedAs($user);

        // $response->assertRedirect(route('publication.posts.index'));
    }
}
