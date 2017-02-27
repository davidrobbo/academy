<template>
    <div>
        <spinner v-if="isLoading" message="Loading"></spinner>
    </div>
</template>
<script>
    import spinner from '../../LoadingSpinner.vue';
    export default {
        name: '',
        components: {
            spinner: spinner
        },
        data() {
            return {
                user: {
                    id: null
                }
            }
        },
        computed: {
            isLoading(){
                return !this.user.id;
            }
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
