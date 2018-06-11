<template>
    <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.director }}</td>
        <td>{{ item.poster }}</td>
        <td>
            <list-button
                buttonTitle="Details"
                glyphiconType="list"
                v-on:clic="detailMovie(item.id)"
            ></list-button>
            <list-button
                buttonTitle="Edit"
                glyphiconType="edit"
                v-on:clic="editMovie(item.id)"
            ></list-button>
            <list-button
                buttonTitle="Delete"
                glyphiconType="trash"
                v-on:clic="deleteMovie(item.id)"
            ></list-button>
        </td>
    </tr>
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import ListButton from "./ListButton.vue";
    export default {
        name: "Movie list",
        data(){
            return{

            }
        },
        components:{
            "list-button": ListButton
        },
        props: ["item"],
        methods:{
            detailMovie: function(id){
                this.$router.push("/showMovie/" + id);
            },
            editMovie: function(id){
                this.$router.push("/editMovie/" + id);
            },
            deleteMovie: function(id){
                myAxios
                    .delMovie(id)
                    .then(this.$emit("refreshPage"))
                    .catch(messageServ => console.log(messageServ))
            }

        }
    }
</script>
