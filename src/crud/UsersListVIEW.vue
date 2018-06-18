<template>
    <div class="table-responsive">
        <a name="usersList"></a>
        <h2>Users list</h2>
        <search-element
            v-bind:search="search"
            v-on:search="mySearch"
        ></search-element>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <users-list
                    v-for="(user, index) in usersFilter"
                    v-bind:key="index"
                    v-bind:item="user"
                    v-on:refreshPage="myRefreshPage"
                ></users-list>
            </tbody>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th>Actions</th>
                </tr>
            </tfoot>
        </table>
        <general-button
            typeGlyphicon="success"
            buttonTitle="Add new element"
            v-on:clic="newUser"
        ></general-button>
    </div>    
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import SearchElement from "./SearchElement.vue";
    import UsersList from "./UsersList.vue";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "users-list-view",
        components:{
            "search-element": SearchElement,
            "users-list": UsersList,
            "general-button": GeneralButton
        },
        data(){
            return{
                users: [],
                search: ""
            }
        },
        computed:{
            usersFilter(){
                return this.users.filter(element => element.name.includes(this.search));
            }
        },
        mounted: function(){
            this.myRefreshPage();
        },
        methods:{
            mySearch: function(search){
                this.search = search;
            },
            newUser: function(){
                this.$router.push("/newuser");
            },
            myRefreshPage: function(){
                myAxios
                    .getUsers()
                    .then(answer => (this.users = answer.data))
                    .catch(messageServ => console.log(messageServ))
            }
        }
    }
</script>

<style>
    
</style>
