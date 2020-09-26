<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Encore\Admin\Traits\DefaultDatetimeFormat;

class Logo extends Model
{

    use DefaultDatetimeFormat;
    //
    /**
     * 与模型关联的表名
     *
     * @var string
     */
    protected $table = 'logos';

    /**
     * 黑名单
     *
     * @var array
     */
    protected $guarded = [];

    public $timestamps = true;

}
