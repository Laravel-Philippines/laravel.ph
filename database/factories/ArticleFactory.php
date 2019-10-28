<?php

use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(App\Models\Article::class, function (Faker $faker) {
    return [
        'title'         =>  $faker->sentence,
        'body'          =>  $faker->paragraph,
        'published_at'  =>  Carbon::now(),
    ];
});
