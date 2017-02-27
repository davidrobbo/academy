<template>
    <div class="panel">
        <router-view></router-view>
        <router-link :to="{ name : 'createUni' }">create</router-link>
        <router-link :to="{ name : 'editUni' }">edit</router-link>
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
