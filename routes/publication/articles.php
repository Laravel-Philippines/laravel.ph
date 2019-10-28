<?php

Route::get('articles', 'Publication\ArticlesController@index')->name('articles.index');
Route::post('articles/store', 'Publication\ArticlesController@store')->name('articles.store');
Route::get('articles/{article}/show', 'Publication\ArticlesController@show')->name('articles.show');
Route::patch('articles/{article}/update', 'Publication\ArticlesController@update')->name('articles.update');
