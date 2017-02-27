<template>
    <div>
        <div class="panel panel-headline">
            <div class="panel-heading">
                <h3 class="panel-title">Creating a new player <i class="fa fa-question-circle-o" @click="listDesc = !listDesc"></i></h3>
                <p class="panel-subtitle" v-if="listDesc">
                    Complete the profile to your and click save; simple!
                </p>
            </div>
            <div class="panel-body">
                <div class="row metric">
                    <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="firstname" class="form-label">Firstname:</label>
                            <input type="text" id="firstname" class="form-control" v-model="newUser.firstname"/>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="surname" class="form-label">Surname:</label>
                            <input type="text" id="surname" class="form-control" v-model="newUser.surname"/>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="email" class="form-label">Email address:</label>
                            <input type="text" id="email" class="form-control" v-model="newUser.email"/>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="position" class="form-label">Position:</label>
                            <select id="position" class="form-control" v-model="newUser.position">
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
    </div>
</template>
<script>
    import navpanel from '../../NavigatePanel.vue';
    export default {
        name: '',
        components: {
            navpanel: navpanel
        },
        data() {
            return {
                listDesc: false,
                newUser: {
                    firstname: "",
                    surname: "",
                    position: "",
                    email: ""
                }
            }
        },
        computed: {        
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
