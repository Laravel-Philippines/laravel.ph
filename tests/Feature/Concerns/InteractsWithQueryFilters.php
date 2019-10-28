<?php

namespace Tests\Feature\Concerns;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Foundation\Testing\TestResponse;

trait InteractsWithQueryFilters
{
    /**
     * Set the filters of the request
     *
     * @param string $model
     * @param string $filter
     * @param array  $parameters
     */
    public function setRequestFilters($modelClass, $filterClass, array $parameters)
    {
        return $modelClass::filter(
            new $filterClass(
                app(Request::class)->merge($parameters)
            )
        );
    }

    /**
     * Set the data to the response object as content
     *
     * @param mixed $data
     */
    protected function setResponseContent($data)
    {
        return TestResponse::fromBaseResponse(
            app(Response::class)->setContent($data)
        );
    }
}
