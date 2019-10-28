<?php

use App\Models\User;

$factory->define(User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name'              =>  $faker->name,
        'bio'               =>  $faker->sentence,
        'email'             =>  $faker->unique()->safeEmail,
        'password'          =>  '$2y$10$0Rkf.GjT5/ss5xHPUmHrnuMvLM4312hIZER5PE/V28yoSbs05Apv2', // secret
        'remember_token'    =>  str_random(10),
    ];
});
