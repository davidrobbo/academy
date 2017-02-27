<!doctype html>
<html lang="en">

<head>
    <title>EDSV Academy - Admin Dashboard</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset("css/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/vendor/icon-sets.css") }}">
    <link rel="stylesheet" href="{{ asset("css/main.min.css") }}">
    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    <link rel="stylesheet" href="{{ asset("css/demo.css") }}">
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
    <!-- ICONS -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>

<body>
<!-- WRAPPER -->
<div id="app">
    <div id="wrapper">
        <!-- SIDEBAR -->
        <sidemenu></sidemenu>
        <!-- END SIDEBAR -->
        <!-- MAIN -->
        <div class="main">
            <!-- NAVBAR -->
            <adminnav></adminnav>
            <!-- END NAVBAR -->
            <!-- MAIN CONTENT -->
            <div class="main-content">
                <div class="container-fluid">
                    <!-- OVERVIEW -->
                    <router-view></router-view>
                </div>
            </div>
            <!-- END MAIN CONTENT -->
            <footer>
                <div class="container-fluid">
                    <p class="copyright">&copy; 2016. Designed &amp; Crafted by <a href="https://themeineed.com">The Develovers</a></p>
                </div>
            </footer>
        </div>
        <!-- END MAIN -->
    </div>
    {{ csrf_field() }}
</div>
<!-- END WRAPPER -->
<!-- Javascript -->
<script src="{{ asset("js/jquery/jquery-2.1.0.min.js") }}"></script>
<script src="{{ asset("js/bootstrap/bootstrap.min.js") }}"></script>
<script src="{{ asset("js/plugins/jquery-slimscroll/jquery.slimscroll.min.js") }}"></script>
<script src="{{ asset("js/plugins/jquery-easypiechart/jquery.easypiechart.min.js") }}"></script>
<script src="{{ asset("js/plugins/chartist/chartist.min.js") }}"></script>
<script src="{{ asset("js/klorofil.min.js") }}"></script>
<script src="{{ asset("js/app.js") }}"></script>
</body>

</html>
