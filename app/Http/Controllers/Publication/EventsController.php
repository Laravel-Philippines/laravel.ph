<?php

namespace App\Http\Controllers\Publication;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Filters\EventFilters;
use App\Loaders\EventLoaders;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Http\Requests\Publication\EventResourceRequest;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Filters\EventFilters $filters
     * @return \Illuminate\Http\Response
     */
    public function index(EventFilters $filters)
    {
        $events = Event::filter($filters);

        return EventResource::collection($events);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Publication\EventResourceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EventResourceRequest $request)
    {
        return new EventResource($request->persist());
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Event $event
     * @param  App\Loaders\EventLoaders $loaders
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event, EventLoaders $loader)
    {
        $event = $event->filter($loader);

        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request     $request
     * @param  App\Models\Event             $event
     * @return \Illuminate\Http\Response
     */
    public function update(EventResourceRequest $request, Event $event)
    {
        return new EventResource($request->persist($event));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
