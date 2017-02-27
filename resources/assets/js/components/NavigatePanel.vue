<template>
    <div class="panel panel-headline">
        <router-link class="pull-left" :to="back" v-if="from">Back forward</router-link>
        <span class="pull-left" @click="goBack">Back</span>
        <router-link class="pull-right" :to="next">dkhb</router-link>
        <span class="pull-left" @click="goForwar">Forward</span>
    </div>
</template>
<script>
    export default {
        name: '',
        props: ['to', 'toTitle', 'toIcon', 'from', 'fromTitle', 'fromIcon'],
        data() {
            return {
            
            }
        },
        computed: {
            back(){
                return this.to ? this.to : '/admin'
            },
            next(){
                return this.from ? this.from : '/admin'
            }
        },
        methods: {
        },
        mounted() {
            console.log(this.$router);
        },
        created(){
        }     
    }
</script>
<style>
</style>
