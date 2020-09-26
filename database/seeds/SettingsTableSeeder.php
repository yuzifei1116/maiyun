<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Setting::insert(['title'=>'11','content_title'=>'哈哈哈','content'=>'132456','key_word'=>'ikun','is_display'=>2,'created_at'=>Carbon::now()]);
    }
}
