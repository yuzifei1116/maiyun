<?php

namespace App\Admin\Controllers;

use App\Template;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Admin\Actions\TemplateShop;

class TemplateController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '模板';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Template());

        $grid->column('id', __('索引'));
        $grid->column('name', __('模板名'));
        $grid->column('image', __('模板缩略图'))->lightbox(['width' => 50, 'height' => 50]);
        $grid->tools(function (Grid\Tools $tools) {
            $tools->append('<a class="btn btn-sm btn-success template-shop" href="/template">商城模板</a>');
        });

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
        $show = new Show(Template::findOrFail($id));

        $show->field('id', __('索引'));
        $show->field('name', __('模板名'));
        $show->field('image', __('模板缩略图'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Template());

        $form->text('name', __('模板名'));
        $form->image('image', __('模板缩略图'));
        $form->text('href', __('对应方法--页面'))->required()->help('例如:/xuelunyan');

        return $form;
    }
}
