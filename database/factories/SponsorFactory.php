<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Sponsor::class, function (Faker $faker) {
    return [
        'name'          =>  $faker->company,
        'description'   =>  $faker->paragraph,
        'website'       =>  array_random(['https://google.com', 'https://bing.com', 'https://facebook.com']),
    ];
});
