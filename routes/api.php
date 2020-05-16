<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/smk', 'SmkController@index');
Route::post('/smk', 'SmkController@store');
Route::get('/smk/{id?}', 'SmkController@show');
Route::post('/smk/update/{id?}', 'SmkController@update');
Route::delete('/smk/{id?}', 'SmkController@destroy');
Route::get('/mts', 'MtsController@index');
Route::post('/mts', 'MtsController@store');
Route::get('/mts/{id?}', 'MtsController@show');
Route::post('/mts/update/{id?}', 'MtsController@update');
Route::delete('/mts/{id?}', 'MtsController@destroy');
Route::get('/user', 'UserController@index');
Route::post('/user', 'UserController@store');
Route::get('/user/{id?}', 'UserController@show');
Route::post('/user/update/{id?}', 'UserController@update');
Route::delete('/user/{id?}', 'UserController@destroy');
Route::post('/user/login', 'UserController@login');
