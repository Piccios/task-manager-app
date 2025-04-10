<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statuses')->insert([
            ['name' => 'to do', 'color' => 'yellow'],
            ['name' => 'in progress', 'color' => 'blue'],
            ['name' => 'completed', 'color' => 'green'],
        ]);
    }
}
