<?php

namespace App\Filters;

use App\Loaders\SponsorLoaders;
use Ambengers\QueryFilter\AbstractQueryFilter;

class SponsorFilters extends AbstractQueryFilter
{
    /**
     * Relationship loader class.
     *
     * @var string
     */
    protected $loader = SponsorLoaders::class;

    /**
     * Columns that are searchable.
     *
     * @var array
     */
    protected $searchableColumns = [
        //
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
