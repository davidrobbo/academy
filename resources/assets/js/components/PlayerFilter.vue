<template>
    <div class="row">
        <div class="col-xs-12">
            <i class="fa fa-arrow-right" v-if="!open" @click="open=!open"></i>
            <i class="fa fa-arrow-down" v-if="open" @click="open=!open"></i>
            <h4 style="display:inline;">Search and Filter</h4>
        </div>
    </div>
</template>
<script>
    import Event from '../Event.js';
    export default {
        name: '',
        data() {
            return {
                open: false
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
