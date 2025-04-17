<?php
use Illuminate\Support\Facades\Route;
use App\Models\Status;
use App\Http\Controllers\TaskController;

// Route::get('/tasks', [TaskController::class, 'index']); // 👈 GET
// Route::post('/tasks', [TaskController::class, 'store']); // 👈 POST
// Route::delete('/tasks/{task}', [TaskController::class, 'destroy']); // 👈 DELETE
// Route::patch('/tasks/{task}', [TaskController::class, 'update']); // 👈 PATCH

Route::get('/statuses', function () {
    return Status::all();}); // 👈 GET
Route::apiResource('tasks', TaskController::class);
