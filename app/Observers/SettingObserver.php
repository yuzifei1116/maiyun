<?php

namespace App\Observers;

use App\Setting;
use Carbon\Carbon;

class SettingObserver
{
    /**
     * Handle the setting "created" event.
     *
     * @param  \App\app\Setting  $setting
     * @return void
     */
    public function created(Setting $setting)
    {
        //
    }

    public function saving(Setting $setting)
    {
        
    }

    /**
     * Handle the setting "updated" event.
     *
     * @param  \App\app\Setting  $setting
     * @return void
     */
    public function updated(Setting $setting)
    {
        // if(!empty($setting->id)){
        //     if($setting->is_display == '1'){
        //         $data = Setting::get();
        //         foreach($data as $k=>$v){
        //             $v->is_display = 2;
        //             $v->save();
        //         }
        //         $setting->is_display = 1;
        //         $setting->created_at = Carbon::now();
        //         $setting->save();
        //     }
        // }
    }

    /**
     * Handle the setting "deleted" event.
     *
     * @param  \App\app\Setting  $setting
     * @return void
     */
    public function deleted(Setting $setting)
    {
        //
    }

    /**
     * Handle the setting "restored" event.
     *
     * @param  \App\app\Setting  $setting
     * @return void
     */
    public function restored(Setting $setting)
    {
        //
    }

    /**
     * Handle the setting "force deleted" event.
     *
     * @param  \App\app\Setting  $setting
     * @return void
     */
    public function forceDeleted(Setting $setting)
    {
        //
    }
}
