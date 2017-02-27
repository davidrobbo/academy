<template>
<div class="sidebar">
    <div class="brand">
        <a href="index.html"><img src="../../../../public/img/logo.png" alt="Klorofil Logo" class="img-responsive logo"></a>
    </div>
    <div class="sidebar-scroll">
        <nav>
            <ul class="nav">
                <li><router-link to="/admin" :class="{ active : isActive('/admin') }"><i class="lnr lnr-home"></i> <span>Dashboard</span></router-link></li>
                <li><router-link to="/admin/players" :class="{ active : isActive('/admin/players') }"><i class="lnr lnr-code"></i> <span>Players</span></router-link></li>
                <li><router-link to="/admin/universities" :class="{ active : isActive('/admin/universities') }"><i class="lnr lnr-chart-bars"></i> <span>Universities</span></router-link></li>
                <li><router-link to="/admin/positions" :class="{ active : isActive('/admin/positions') }"><i class="lnr lnr-cog"></i> <span>Positions</span></router-link></li>
                <li><router-link to="/admin/notifications" :class="{ active : isActive('/admin/notifications') }"><i class="lnr lnr-alarm"></i> <span>Notifications</span></router-link></li>
                <li>
                    <a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>Pages</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                    <div id="subPages" class="collapse ">
                        <ul class="nav">
                            <li><router-link to="/admin/pages/1" :class="{ active : isActive('/admin/pages/1') }">Home</router-link></li>
                            <li><router-link to="/admin/pages/2" :class="{ active : isActive('/admin/pages/2') }">About us</router-link></li>
                            <li><router-link to="/admin/pages/3" :class="{ active : isActive('/admin/pages/3') }">Contact us</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><router-link to="/admin/categories" :class="{ active : isActive('/admin/categories') }"><i class="lnr lnr-dice"></i> <span>Categories</span></router-link></li>
                <li><router-link to="/admin/characteristics" :class="{ active : isActive('/admin/characteristics') }"><i class="lnr lnr-text-format"></i> <span>Characteristics</span></router-link></li>
                <li><router-link to="/admin/blogs" :class="{ active : isActive('/admin/blogs') }"><i class="lnr lnr-text-format"></i> <span>Blogs</span></router-link></li>
            </ul>
        </nav>
    </div>
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
            isActive(p){
                return this.$route.path == p;
            }
        },
        mounted() {
        },
        created(){
        }     
    }
</script>
<style>
</style>
