<?php

use Carbon\Carbon;
use App\Models\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return [
        'title'         =>  $faker->sentence,
        'description'   =>  $faker->paragraph,
        'event_date'    =>  Carbon::now(),
    ];
});
