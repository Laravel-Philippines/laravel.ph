<?php

namespace Tests;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Foundation\Testing\TestResponse;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp() : void
    {
        parent::setUp();

        $this->withoutExceptionHandling();
    }

    /**
     * Authenticate a user
     *
     * @param  App\Models\User|null $user
     * @return App\Models\User
     */
    protected function signIn(User $user = null)
    {
        $user = $user ?? factory(User::class)->create();

        $this->actingAs($user);

        return $user;
    }
}
