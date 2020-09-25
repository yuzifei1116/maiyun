<?php

namespace App\Admin\Controllers;

use App\Setting;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SettingController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '网站设置';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Setting());

        $grid->column('id', __('索引'));
        $grid->column('title', __('标题'))->label('success');
        $grid->column('content_title', __('内容标题'))->label('danger');
        $grid->column('content', __('内容'))->label('info');
        $grid->column('key_word', __('关键词'))->label('default');
        $grid->column('is_display', __('是否显示'))->switch([
            'on'  => ['value' => 1, 'text' => '打开', 'color' => 'primary'],
            'off' => ['value' => 2, 'text' => '关闭', 'color' => 'default'],
        ]);
        $grid->column('created_at', __('设置时间'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Setting::findOrFail($id));

        $show->field('id', __('索引'));
        $show->field('title', __('标题'));
        $show->field('content_title', __('内容标题'));
        $show->field('content', __('内容'));
        $show->field('key_word', __('关键词'));
        $show->field('is_display', __('是否显示'))->using(['1' => '显示', '2' => '不显示']);;

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Setting());

        $form->text('title', __('网站首页'));
        $form->text('content_title', __('内容标题'));
        $form->text('content', __('内容'));
        $form->text('key_word', __('关键词'));
        $form->switch('is_display','显示');

        //保存前回调
        $form->saving(function (Form $form) {
            if($form->is_display == 'on'){
                //...
                Setting::where('id','<>',0)->update(['is_display'=>2]);
            }
        });
        
        return $form;
    }
}
