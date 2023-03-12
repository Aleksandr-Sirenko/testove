<!DOCTYPE html>
<html dir="ltr" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <title>@yield('title')</title>
  <base href="{{ route('home') }}" />
  <meta name="description" content="@yield('description')" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
  <meta property="og:title" content="IT Rating - a reliable source for finding web studios and IT agency" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{{ route('home') }}" />
  <meta property="og:image" content="" />
  <meta property="og:site_name" content="IT Rating" />
  <link rel="alternate" hreflang="en" href="{{ route('home') }}">
  <meta http-equiv='content-language' content='en'>
  <link href="/img/rating-com.png" rel="icon" />
  <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/img/touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/img/touch-icon-iphone-retina.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/img/touch-icon-ipad-retina.png">
  <meta name="theme-color" content="#196ab8">
  <link href="{{ route('home') }}" rel="canonical">
  <link rel="stylesheet" href="/css/fonts.css" defer>
  <link rel="stylesheet" href="/css/style.css" defer>
  <link rel="stylesheet" href="/css/config.css" defer>

  <script src="/js/jquery.min.js"></script>
  <script src="/js/jquery-ui.min.js" defer></script>
  <script src="/js/jquery.cookie.js"></script>
  <style>
    .breadcrumb__link {
      color: black !important;
    }
    .company-item-company-block span {
      color: black !important;
    }
  </style>
  <script>
    $(document).ready(function () {
      $('input[type=tel], input[name="phone"]').inputmask({"mask": "+1(999) 999 99 99"});
    });
  </script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWWQM937QS"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-NWWQM937QS');
  </script>
</head>
<body>
    <div class="pageWrap">
        @includeIf('partials.header')
        @yield('content')
        @includeIf('partials.footer')
    </div>
    @includeIf('partials.modal')
</body>
</html>