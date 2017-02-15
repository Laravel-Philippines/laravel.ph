<!DOCTYPE html>
<html lang="en" @yield('html-attr', '')>
<head @yield('head-attr', '')>
    @yield('head-pre')
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title', config('app.name'))</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script src="https://use.fontawesome.com/498c0e1bb0.js"></script>
    @yield('head-post')
</head>
<body @yield('body-attr', '')>

    @yield('body-pre')

    @include('templates.navigation')

    @include('templates.heading')

    @yield('body')

    @include('templates.footer')

    @include('templates.scripts')

    @yield('body-post')

</body>
</html>
