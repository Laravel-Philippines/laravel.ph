<?php

namespace App\Http\Controllers\Publication;

use App\Models\Sponsor;
use Illuminate\Http\Request;
use App\Filters\SponsorFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\SponsorResource;
use App\Http\Requests\Publication\SponsorResourceRequest;

class SponsorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  App\Filters\SponsorFilters $filters
     * @return \Illuminate\Http\Response
     */
    public function index(SponsorFilters $filters)
    {
        $sponsors = Sponsor::filter($filters);

        return SponsorResource::collection($sponsors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Publication\SponsorResourceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SponsorResourceRequest $request)
    {
        return new SponsorResource($request->persist());
    }

    /**
     * Display the specified resource.
     *
     * @param  App\Models\Sponsor $sponsor
     * @return \Illuminate\Http\Response
     */
    public function show(Sponsor $sponsor)
    {
        return new SponsorResource($sponsor);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\Publication\SponsorResourceRequest  $request
     * @param  App\Models\Sponsor $sponsor
     * @return \Illuminate\Http\Response
     */
    public function update(SponsorResourceRequest $request, Sponsor $sponsor)
    {
        return new SponsorResource($request->persist($sponsor));
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
