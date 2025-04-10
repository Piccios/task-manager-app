<?php
use Illuminate\Support\Facades\Route;
use App\Models\Status;
use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class, 'index']); // 👈 GET
Route::post('/tasks', [TaskController::class, 'store']); // 👈 POST
Route::get('/statuses', function () {
    return Status::all();}); // 👈 GET
