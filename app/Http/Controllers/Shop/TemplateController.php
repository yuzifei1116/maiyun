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


    /**
     * 血轮眼模板--页面
     */
    public function xuelunyan()
    {
        return view('template.xuelunyan');
    }


    /**
     * 罪恶都市模板--页面
     */
    public function zuiedushi()
    {
        return view('template.zuiedushi');
    }


}
