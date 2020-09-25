<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    //
    //
    /**
     * 与模型关联的表名
     *
     * @var string
     */
    protected $table = 'template';

    /**
     * 不可批量赋值的属性
     *
     * @var array
     */
    protected $guarded = [];
}
