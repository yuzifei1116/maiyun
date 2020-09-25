<?php

namespace App\Observers;

use App\Setting;

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
    public function updateing(Setting $setting)
    {
        if(!empty($setting->id)){
            if($setting->is_display == '1'){
                Setting::update(['is_display'=>2]);
                Setting::where('id',$setting->id)->update(['is_display'=>1]);
            }
        }
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
