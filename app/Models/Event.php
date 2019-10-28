<?php

namespace App\Models;

use App\Models\Sponsor;
use App\Models\EventSponsor;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $guarded = [];

    public function publisher()
    {
        return $this->belongsTo(User::class, 'publisher_id');
    }


    public function sponsors()
    {
        return $this->belongsToMany(Sponsor::class)
            ->using(EventSponsor::class)
            ->withTimestamps();
    }
}
