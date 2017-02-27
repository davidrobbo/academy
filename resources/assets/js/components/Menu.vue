<template>
    <div class="col-sm-3 col-lg-2">
        <nav class="navbar navbar-default navbar-fixed-side">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Academy</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
            
            }
        },
        computed: {        
        },
        methods: {
        },
        mounted() {
        },
        created(){
        }     
    }
</script>
<style>
    nav {
        background-color: #222D31 !important;
        margin-bottom: 0px !important;
        border: #222D31 !important;
    }
    nav a {
        color: #ffffff !important;
    }
    .left-menu {
        height: 100%;
        background-color: #000000;
        color: #ffffff;
    }
</style>
