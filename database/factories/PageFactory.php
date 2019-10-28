<?php

use App\Models\Page;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Page::class, function (Faker $faker) {
    return [
        'title' =>  $title = $faker->word,
        'slug'  =>  Str::slug($title),
    ];
});
