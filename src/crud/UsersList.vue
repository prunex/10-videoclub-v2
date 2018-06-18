<template>
    <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.created_at }}</td>
        <td>{{ item.updated_at }}</td>
        <td>
            <list-button
                buttonTitle="Details"
                glyphiconType="list"
                v-on:clic="detailUser(item.id)"
            ></list-button>
            <list-button
                buttonTitle="Edit"
                glyphiconType="edit"
                v-on:clic="editUser(item.id)"
            ></list-button>
            <list-button
                buttonTitle="Delete"
                glyphiconType="trash"
                v-on:clic="deleteUser(item.id)"
            ></list-button>
        </td>
    </tr>
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import ListButton from "./ListButton.vue";
    export default {
        name: "users-list",
        data(){
            return{
            }
        },
        components:{
            "list-button": ListButton
        },
        props: ["item"],
        methods:{
            detailUser: function(id){
                this.$router.push("/showuser/" + id);
            },
            editUser: function(id){
                this.$router.push("/edituser/" + id);
            },
            deleteUser: function(id){
                myAxios
                    .delUser(id)
                    .then(this.$emit("refreshPage"))
                    .catch(messageServ => console.log(messageServ))
            }
        }        
    }
</script>

<style>

</style>
