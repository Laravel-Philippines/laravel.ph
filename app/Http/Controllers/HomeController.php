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
        'fa-facebook-f' => [
            'name' => 'FACEBOOK',
            'url' => 'https://www.facebook.com/groups/laravelph',
        ],
        'fa-twitter' => [
            'name' => 'TWITTER',
            'url' => 'https://twitter.com/laravelph',
        ],
        'fa-github' => [
            'name' => 'GITHUB',
            'url' => 'https://github.com/Laravel-Philippines',
        ],
        'fa-meetup' => [
            'name' => 'MEETUP',
            'url' => 'https://www.meetup.com/Laravel-Philippines',
        ],
    ];

    public function index()
    {
        return view('index')->with(['affiliates' => $this->affiliates, 'connected_links' => $this->connectedLinks]);
    }

    public function slack()
    {
        return redirect('https://laravelph.slack.com');
    }
}
