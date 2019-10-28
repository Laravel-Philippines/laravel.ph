<?php

Route::get('/', 'WelcomeController@index')->name('welcome');

Route::group(['middleware' => ['auth'], 'prefix' => 'spa/publication', 'as' => 'publication.'], function () {
    require __DIR__ . '/publication/sponsors.php';
    require __DIR__ . '/publication/articles.php';
    require __DIR__ . '/publication/events.php';
});

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

//Route::get('{any?}', 'SpaController')->where('any', '.*')->middleware('auth');
