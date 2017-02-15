<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    protected $affiliates = [
        'nuworks',
        'popslide',
        'yoyo',
        'zendesk'
    ];

    protected $connectedLinks = [
        'fa-facebook-f' => 'https://www.facebook.com/groups/laravelph',
        'fa-twitter' => 'https://twitter.com/laravelph',
        'fa-github' => 'https://github.com/Laravel-Philippines',
        'fa-meetup' => 'https://www.meetup.com/Laravel-Philippines'
    ];

    public function index()
    {
        return view('index')->with(['affiliates' => $this->affiliates, 'connected_links' => $this->connectedLinks]);
    }
}
