<?php

namespace App\Filters;

use App\Loaders\ArticleLoaders;
use Ambengers\QueryFilter\AbstractQueryFilter;

class ArticleFilters extends AbstractQueryFilter
{
    /**
     * Relationship loader class.
     *
     * @var string
     */
    protected $loader = ArticleLoaders::class;

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
