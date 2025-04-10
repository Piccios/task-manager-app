<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title',
        'status_id',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
