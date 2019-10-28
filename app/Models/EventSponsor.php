<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class EventSponsor extends Pivot
{
    public $incrementing = true;

    protected $guarded = [];
}
