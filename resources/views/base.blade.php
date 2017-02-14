<!DOCTYPE html>
<html lang="en" @yield('html-attr', '')>
<head @yield('head-attr', '')>
    @yield('head-pre')
    <meta charset="UTF-8">
    <title>@yield('title', config('app.name'))</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script src="https://use.fontawesome.com/498c0e1bb0.js"></script>
    @yield('head-post')
</head>
<body @yield('body-attr', '')>

    @yield('body-pre')

    @include('templates.header')

    @yield('body')

    @include('templates.scripts')

    @yield('body-post')

</body>
</html>
