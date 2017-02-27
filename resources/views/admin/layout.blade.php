<!doctype html>
<html lang="en">

<head>
    <title>EDSV Academy - Admin Dashboard</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- CSS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset("css/vendor/icon-sets.css") }}">
    <link rel="stylesheet" href="{{ asset("css/main.min.css") }}">
    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    <link rel="stylesheet" href="{{ asset("css/demo.css") }}">
    <link rel="stylesheet" href="{{ asset("css/animate.css") }}">
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
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
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
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="{{ asset("js/plugins/jquery-slimscroll/jquery.slimscroll.min.js") }}"></script>
<script src="{{ asset("js/plugins/jquery-easypiechart/jquery.easypiechart.min.js") }}"></script>
<script src="{{ asset("js/plugins/chartist/chartist.min.js") }}"></script>
<script src="{{ asset("js/klorofil.min.js") }}"></script>
<script src="{{ asset("js/app.js") }}"></script>
</body>

</html>
