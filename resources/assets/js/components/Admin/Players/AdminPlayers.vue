<template>
    <div>
        <transition name="slideRight" mode="out-in">
            <router-view></router-view>
        </transition>
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
</style>
