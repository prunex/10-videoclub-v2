<template>
    <div>
        <a name="showuser"></a>
        <h2>Show User</h2>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">ID</h3>
            </div>
            <div class="panel-body">{{ myUser.id }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Name</h3>
            </div>
            <div class="panel-body">{{ myUser.name }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">E-mail</h3>
            </div>
            <div class="panel-body">{{ myUser.email }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Created at</h3>
            </div>
            <div class="panel-body">{{ myUser.created_at }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Updated at</h3>
            </div>
            <div class="panel-body">{{ myUser.updated_at }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Actions</h3>
            </div>
            <div class="panel-body">
                <div class="control-group">
                    <div class="controls">
                        <!-- Button -->
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="primary"
                                buttonTitle="Back"
                                v-on:clic="backToUserList"
                            ></general-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>    
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "read-user",
        data(){
            return{
                myUser:{
                    id: "",
                    name: "",
                    email: "",
                    created_at: "",
                    updated_at: ""
                }
            }
        },
        components:{
            "general-button": GeneralButton
        },
        props: ["id"],
        methods:{
            backToUserList: function(){
                this.$router.push("/userlist")
            }
        },
        mounted: function(){
            if(this.id){
                myAxios
                    .getUser(this.id)
                    .then(answer => (this.myUser = answer.data))
                    .catch(messageServ => console.log(messageServ))
            }
        }  
    }
</script>

<style>
    
</style>
