<nav id="navigation" class="navbar navbar-laravel navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation .navigation-collapse" aria-expanded="false">
                <span class="sr-only">Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">
                <img src="{{ asset('/assets/logo.svg') }}" alt="{{ config('app.name') }}" />
            </a>
        </div>

        <div class="collapse navbar-collapse navigation-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#heading">ABOUT</a></li>
                <li><a href="#meetup_component">MEETUPS</a></li>
                <li><a href="#partner_affiliates_component">PARTNERS &amp; AFFILIATES</a></li>
                <li><a href="#">CAREER OPPORTUNITIES</a></li>
                @foreach(array_slice($connected_links, 0, 2) as $faclass => $link)
                <li class="social-icon">
                    <a href="{{ $link['url'] }}" target="_blank">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-stack-1x {{ $faclass }}"></i>
                        </span>
                        <span class="hidden-md hidden-lg">{{ $link['name'] }}</span>
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</nav>
