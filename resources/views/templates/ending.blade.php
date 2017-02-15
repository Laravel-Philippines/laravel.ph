<section id="ending">
    <div class="container">
        <div class="col-md-8 col-md-push-2 text-center">
            <h5>GET YOURSELF <strong>CONNECTED</strong></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div class="social-icons">
                @foreach($connected_links as $faclass => $link)
                <a href="{{ $link }}">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-stack-1x {{ $faclass }}"></i>
                    </span>
                </a>
                @endforeach
            </div>
        </div>
    </div>
</section>
