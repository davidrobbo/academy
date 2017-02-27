<template>
    <div class="panel panel-headline">
        <div class="text-right">
            <router-link class="btn btn-default" :to="{ name : 'createPlayer' }">Add a player</router-link>
        </div>
        <div class="panel-heading">
            <h3 class="panel-title">Players list <i class="fa fa-question-circle-o" @click="listDesc = !listDesc"></i></h3>
            <transition name="fade">
                <p class="panel-subtitle" v-if="listDesc">
                    Below is a list of all players registered. You can change the display and filter through the players
                    with the filter system. Alongside the players details are buttons for editing and deleting players.
                </p>
            </transition>
        </div>
        <div class="panel-body">
            <playerfilter></playerfilter>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th v-if="showOptions.id">ID</th>
                            <th v-if="showOptions.fullname">Name</th>
                            <th v-if="showOptions.firstname">Firstname</th>
                            <th v-if="showOptions.surname">Surname</th>
                            <th v-if="showOptions.email">Email</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users">
                            <td v-if="showOptions.id">{{ user.id }}</td>
                            <td v-if="showOptions.fullname">{{ fullName(user) }}</td>
                            <td v-if="showOptions.firstname">{{ user.firstname }}</td>
                            <td v-if="showOptions.surname">{{ user.surname }}</td>
                            <td v-if="showOptions.email">{{ user.email }}</td>
                            <td class="text-right">
                                <div class="btn btn-primary" @click="getEditFormFor(user)">Edit</div>
                                <div class="btn btn-default" @click="loginAs(user)"><i class="fa fa-user-circle-o"></i></div>
                                <div class="btn btn-danger" @click="delete(user)"><i class="fa fa-times"></i></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import playerfilter from '../../PlayerFilter.vue';
    import Event from '../../../Event.js';
    export default {
        name: '',
        components: {
            playerfilter: playerfilter
        },
        data() {
            return {
                users: [{id: 1, firstname: "d", surname: "r", email: "a"}],
                showOptions: {
                    id: true,
                    fullname: true,
                    firstname: false,
                    surname: false,
                    email: false
                },
                listDesc: false
            }
        },
        computed: {        
        },
        methods: {
            fullName(u){
                return u.firstname + " " + u.surname;
            },
            delete(user){
            },
            loginAs(user){
            },
            getEditFormFor(user){
                this.$router.push({ name: 'editPlayer', params: { id: user.id }});
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
