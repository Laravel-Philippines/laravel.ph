<?php

Route::get('events', 'Publication\EventsController@index')->name('events.index');
Route::post('events/store', 'Publication\EventsController@store')->name('events.store');
Route::get('events/{event}/show', 'Publication\EventsController@show')->name('events.show');
Route::patch('events/{event}/update', 'Publication\EventsController@update')->name('events.update');
