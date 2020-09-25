<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    //
    /**
     * 与模型关联的表名
     *
     * @var string
     */
    protected $table = 'settings';

    /**
     * 不可批量赋值的属性
     *
     * @var array
     */
    protected $guarded = [];
}
