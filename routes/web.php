<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    dd('Request');
});


/**
 * @version [<vector>] [<模板商城--页面>]
 */
Route::any('/template','Shop\TemplateController@template');


/**
 * @version [<vector>] [<血轮眼--页面>]
 */
Route::any('/wheel','Shop\TemplateController@xuelunyan');


/**
 * @version [<vector>] [<罪恶都市--页面>]
 */
Route::any('/city','Shop\TemplateController@zuiedushi');

