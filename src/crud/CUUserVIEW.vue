<template>
    <div>
        <a name="newuser"></a>
        <h2>{{userType}} user</h2>
        <form class="form-horizontal">
            <fieldset>
                <div id="legend">
                    <legend>New user</legend>
                </div>
                <div class="btn-group">
                </div>

                <div class="control-group">
                    <!-- id -->
                    <label for="id" class="control-label">ID</label>
                    <div class="controls">
                        <input 
                            type="text"
                            id="id"
                            name="id"
                            class="form-control"
                            disabled
                            v-model="myUser.id"
                            >
                    </div>
                </div>

                <div class="control-group">
                    <!-- title -->
                    <label for="name" class="control-label">Name</label>
                    <div class="controls">
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            v-model="myUser.name"
                            >
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- email -->
                    <label for="email" class="control-label">Email</label>
                    <div class="controls">
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            v-model="myUser.email"
                            >
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- password -->
                    <label for="password" class="control-label">Password</label>
                    <div class="controls">
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            v-model="myUser.password"
                            >
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- created_at -->
                    <label for="text" class="control-label">Created at</label>
                    <div class="controls">
                        <input 
                            type="text"
                            id="created_at"
                            name="created_at"
                            class="form-control"
                            v-model="myUser.created_at"
                            >
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- updated_at -->
                    <label for="text" class="control-label">Updated at</label>
                    <div class="controls">
                        <input 
                            type="text"
                            id="updated_at"
                            name="updated_at"
                            class="form-control"
                            v-model="myUser.updated_at"
                            >
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="btn-group">
                    <!-- Button -->
                    <!-- <button 
                        class="btn btn-success" 
                        v-on:click.prevent="register"
                    >Register</button> -->
                    <!-- <button 
                        class="btn btn-danger" 
                        v-on:click.prevent="cancel"
                    >Cancel</button> -->
                    <general-button
                        typeGlyphicon="success"
                        buttonTitle="Register"
                        v-on:clic="register"
                    ></general-button>
                    <!-- <general-button
                        typeGlyphicon="danger"
                        buttonTitle="Cance"
                        v-on:clic="cancel"
                    ></general-button> -->
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "cu-user",
        data(){
            return{
                myUser:{
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    created_at: "",
                    updated_at: ""
                }
            }
        },
        components:{
            "general-button": GeneralButton
        },
        props: ["userType", "id"],
        methods:{
            register: function(){
                if(this.id){
                    myAxios
                        .updateUser(this.id, this.myUser)
                        .then(answer => this.$router.push("/userlist"))
                        .catch(messageServ => console.log(messageServ))
                } else {
                    myAxios
                        .insertUser(this.myUser)
                        .then(answer => this.$route.push("/userlist"))
                        .catch(messageServ => console.log(messageServ))
                }
            },
            cancel: function(){
                this.$route.push("/userlist")
            }
        },
        mounted: function(){
            if(this.id){
                myAxios
                    .getUser(this.id)
                    .then(answer => this.myUser = answer.data)
                    .catch(messageServ => console.lo(messageServ))
            }
        }
    }
</script>
