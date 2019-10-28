<?php

namespace App\Filters;

use App\Loaders\EventLoaders;
use Ambengers\QueryFilter\AbstractQueryFilter;

class EventFilters extends AbstractQueryFilter
{
    /**
     * Relationship loader class.
     *
     * @var string
     */
    protected $loader = EventLoaders::class;

    /**
     * Columns that are searchable.
     *
     * @var array
     */
    protected $searchableColumns = [
        'title'
    ];

    /**
     * List of object filters.
     *
     * @var array
     */
    protected $filters = [
        //
    ];
}
