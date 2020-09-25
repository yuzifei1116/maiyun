<?php

namespace App\Admin\Actions;

use Encore\Admin\Actions\Action;
use Illuminate\Http\Request;

class TemplateShop extends Action
{
    protected $selector = '.template-shop';

    public function handle(Request $request)
    {
        // $request ...

        return $this->response()->success('Success message...')->refresh();
    }

    /**
     * 展示的按钮
     */
    public function html()
    {
        return <<<HTML
        <a class="btn btn-sm btn-success template-shop">模板商城</a>
HTML;
    }

    /**
     * 展示得html
     */
    public function form()
    {
        
    }
}