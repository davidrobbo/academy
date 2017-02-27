<template>
    <ul class="nav">
        <li :class="{ active : isActive('/admin') }">
            <router-link to="/admin">
                <i class="ti-panel"></i>
                <p>Dashboard</p>
            </router-link>
        </li>
        <li :class="{ active : isActive('/admin/players') }">
            <router-link to="/admin/players">
                <i class="ti-user"></i>
                <p>Players</p>
            </router-link>
        </li>
        <li>
            <a href="#">
                <i class="ti-book"></i>
                <p>Universities</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="ti-quote-left"></i>
                <p>Positions</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="ti-view-list-alt"></i>
                <p>Categories</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="ti-dribbble"></i>
                <p>Characteristics</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="ti-bell"></i>
                <p>Notifications</p>
            </a>
        </li>
    </ul>
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
</style>
