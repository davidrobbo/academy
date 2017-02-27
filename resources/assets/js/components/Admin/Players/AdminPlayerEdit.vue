<template>
    <div>
        <transition name="fade" mode="out-in">
            <spinner v-if="isLoading" message="Loading"></spinner>
            <div v-else class="panel panel-headline">
                <div class="panel-heading">
                    <h3 class="panel-title">Creating a new player <i class="fa fa-question-circle-o" @click="listDesc = !listDesc"></i></h3>
                    <transition name="fade">
                        <p class="panel-subtitle" v-if="listDesc">
                            Complete the profile to your and click save; simple!
                        </p>
                    </transition>
                </div>
                <div class="panel-body">
                    <div class="row metric">
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label for="firstname" class="form-label">Firstname:</label>
                                <input type="text" id="firstname" class="form-control" v-model="user.firstname"/>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label for="surname" class="form-label">Surname:</label>
                                <input type="text" id="surname" class="form-control" v-model="user.surname"/>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label for="email" class="form-label">Email address:</label>
                                <input type="text" id="email" class="form-control" v-model="user.email"/>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="form-group">
                                <label for="position" class="form-label">Position:</label>
                                <select id="position" class="form-control" v-model="user.position">
                                    <option value="a">a</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-12 text-center">
                            <div class="form-group">
                                <button class="btn btn-primary" @click="save">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
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
                    id: null,
                    firstname: "",
                    surname: "",
                    email: "",
                    position: ['a']
                },
                listDesc: false
            }
        },
        computed: {
            isLoading(){
                return !this.user.id;
            }
        },
        methods: {
            save(){
                return;
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
