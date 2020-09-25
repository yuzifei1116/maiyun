<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TemplateController extends Controller
{
    //

    /**
     * 商城模板--页面
     */
    public function template()
    {
        return view('admin.shop');
    }


}
