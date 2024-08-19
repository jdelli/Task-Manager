<?php

use App\Http\Controllers\Api\TaskApiController;
use Illuminate\Support\Facades\Route;

Route::get('/{path?}', function () {
    return view('app');
});


Route::group(['prefix' => 'api'], function() {
Route::post('/save-task', [TaskApiController::class, 'saveTask']);
});


Route::group(['prefix' => 'api'], function() {
Route::get('/get-task-list', [TaskApiController::class, 'getAllTask']);
});


Route::group(['prefix' => 'api'], function() {
Route::put('/mark-as-done/{id}', [TaskApiController::class, 'markAsDone']);
});


Route::group(['prefix' => 'api'], function() {
Route::delete('/delete-task/{id}', [TaskApiController::class, 'deleteTask']);
});