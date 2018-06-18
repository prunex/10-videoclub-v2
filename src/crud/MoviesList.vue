<template>
    <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.director }}</td>
        <!-- <td>{{ item.poster }}</td> -->
        <td> 
            <img 
                v-bind:src="item.poster" 
                v-bind:alt="item.title" 
                height="64">
        </td>
        <!-- <td>{{ item.rented ? "Rent it" : "Return it"}}</td> -->
        <td>
            <general-button 
                v-bind:typeGlyphicon="item.rented ? 'danger' : 'success' "
                v-bind:buttonTitle="item.rented ? 'Return it' : 'Rent it' "
                v-on:clic="rent(item.id)"
            ></general-button>
        </td>
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
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "MovieList",
        data(){
            return{
                user_id: "",
            }
        },
        components:{
            "list-button": ListButton,
            "general-button": GeneralButton
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
            },
            rent: function(movie_id){
                //var repeat = true;
                //var user_id = prompt("Introduce el id del usuario: ");
                // do{
                //     var user_id = prompt("Introduce el id del usuario: ");
                //     myAxios
                //         .getUser(user_id)
                //         .then(function(response){
                //             repeat = false;
                //             console.log(response.data);
                //             alert("El usuario es: " + response.data);
                //         })
                //         .catch(function(messageServ){
                //             repeat = true;
                //             console.log(messageServ);
                //             alert("El usuario no existe! Abre la consola para ver los errores");
                //         });
                // }while(repeat);
                if(!this.item.rented){
                    var user_id = prompt("Introduce el id del usuario: ");
                    this.item.rented = 1;
                    myAxios
                        .insertRent({user_id, movie_id})
                        .then(this.$emit("refreshPage"))
                        .catch(messageServ => console.log(messageServ));
                    myAxios
                        .updateMovie(movie_id, this.item)
                        .then(this.$emit("refreshPage"))
                        .catch(messageServ => console.log(messageServ));                   
                }else{
                    this.item.rented = 0;
                    myAxios
                        .updateRent({user_id, movie_id})
                        .then(this.$emit("refreshPage"))
                        .catch(messageServ => console.log(messageServ));
                    myAxios
                        .updateMovie(movie_id, this.item)
                        .then(this.$emit("refreshPage"))
                        .catch(messageServ => console.log(messageServ));

                }
            }
        }
    }
</script>
