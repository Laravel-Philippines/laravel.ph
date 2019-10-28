<?php

namespace App\Loaders;

use Ambengers\QueryFilter\AbstractQueryLoader;

class EventLoaders extends AbstractQueryLoader
{
    /**
     * Relationships that can be lazy/eager loaded.
     *
     * @var array
     */
    protected $loadables = [
        'publisher',
        'sponsors',
    ];
}
