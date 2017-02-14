<nav id="header" class="navbar navbar-laravel navbar-default">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header .header-collapse" aria-expanded="false">
                <span class="sr-only">Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">
                <img src="{{ asset('/assets/logo.svg') }}" alt="{{ config('app.name') }}" />
            </a>
        </div>

        <div class="collapse navbar-collapse header-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MEETUPS</a></li>
                <li><a href="#">PARTNERS &amp; AFFILIATES</a></li>
                <li><a href="#">CAREER OPPORTUNITIES</a></li>
                <li class="social-icon">
                    <a href="#" class="fa-stack fa">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-facebook-f fa-stack-1x"></i>
                        </span>
                        <span class="sr-only">FACEBOOK</span>
                    </a>
                </li>
                <li class="social-icon">
                    <a href="#" class="fa-stack fa">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-twitter fa-stack-1x"></i>
                        </span>
                        <span class="sr-only">TWITTER</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
