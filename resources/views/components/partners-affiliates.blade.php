<div id="partner_affiliates_component" class="component container">
    <div class="row">
        <div class="col-xs-12">
            <div class="component-content">
                <header class="page-header text-primary text-center">
                    <h3>PARTNERS <strong>&amp; AFFILIATES</strong></h3>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit</small>
                </header>

                <div class="owl-carousel owl-theme">
                    @for($i=0;$i<5;$i++)

                        @foreach($affiliates as $affiliate)
                        <div>
                            <img src="{{ asset('/assets/affiliates-' . $affiliate . '.jpg') }}" alt="{{ $affiliate }}" />
                        </div>
                        @endforeach

                        @php
                        shuffle($affiliates)
                        @endphp

                    @endfor
                </div>

            </div>
        </div>

    </div>
</div>
