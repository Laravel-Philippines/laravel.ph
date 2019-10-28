<?php

Route::get('sponsors', 'Publication\SponsorsController@index')->name('sponsors.index');
Route::post('sponsors/store', 'Publication\SponsorsController@store')->name('sponsors.store');
Route::get('sponsors/{sponsor}/show', 'Publication\SponsorsController@show')->name('sponsors.show');
Route::patch('sponsors/{sponsor}/update', 'Publication\SponsorsController@update')->name('sponsors.update');
