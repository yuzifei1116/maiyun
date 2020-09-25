<?php

namespace App\Providers;

use App\Setting;
use App\Observers\SettingObserver;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        Setting::observe(SettingObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}