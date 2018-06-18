<template>
    <div>
        <a name="newMovie"></a>
        <h2>{{movieType}} movie</h2>
        <form class="form-horizontal">
            <fieldset>
                <div id="legend">
                    <legend>New movie</legend>
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
                            disabled v-model="myMovie.id">
                    </div>
                </div>

                <div class="control-group">
                    <!-- title -->
                    <label for="title" class="control-label">Title</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            class="form-control" 
                            v-model="myMovie.title">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- year -->
                    <label for="year" class="control-label">Year</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="year" 
                            name="year" 
                            class="form-control" 
                            v-model="myMovie.year">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- director -->
                    <label for="director" class="control-label">Director</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="director" 
                            name="director" 
                            class="form-control" 
                            v-model="myMovie.director">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- poster -->
                    <label for="poster" class="control-label">Poster</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="poster" 
                            name="poster" 
                            class="form-control" 
                            v-model="myMovie.poster">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- rented -->
                    <label for="poster" class="control-label">Rented</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="rented" 
                            name="rented" 
                            class="form-control" 
                            v-model="myMovie.rented">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- synopsis -->
                    <label for="synopsis" class="control-label">Synopsis</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="synopsis" 
                            name="synopsis" 
                            class="form-control" 
                            v-model="myMovie.synopsis">
                        <p class="help-block">Required field</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- created_at -->
                    <label for="created_at" class="control-label">Created at</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="created_at" 
                            name="created_at" 
                            class="form-control" 
                            v-model="myMovie.created_at">
                        <p class="help-block">Required field</p>
                    </div>
                </div>
                
                <div class="control-group">
                    <!-- updated_at -->
                    <label for="updated_at" class="control-label">Updated at</label>
                    <div class="controls">
                        <input 
                            type="text" 
                            id="updated_at" 
                            name="updated_at" 
                            class="form-control" 
                            v-model="myMovie.updated_at">
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
                    >Register</button> -->
                    <general-button 
                        typeGlyphicon="success"
                        buttonTitle="Register"
                        v-on:clic="register"
                    ></general-button>
                    <!-- <general-button
                        typeGlyphicon="danger"
                        titleButton="Cancel"
                        v-on:clic.prevent="cancel"
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
        name: "cu-movie",
        data(){
            return{
                myMovie:{
                    id: "",
                    title: "",
                    year: "",
                    director: "",
                    poster: "",
                    rented: "",
                    synopsis: "",
                    created_at: "",
                    updated_at: "",
                }
            }
        },
        components:{
            "general-button": GeneralButton
        },
        props: ["movieType", "id"],
        methods:{
            register: function(){
                if(this.id){
                    myAxios
                        .updateMovie(this.id, this.myMovie)
                        .then(answer => this.$router.push("/"))
                        .catch(messageServ => console.log(messageServ));
                }else{
                    myAxios
                        .insertMovie(this.myMovie)
                        .then(answer => this.$router.push("/"))
                        .catch(messageServ => console.log(messageServ));
                }
            },
            cancel: function(){
                this.$route.push("/");
            }
        },
        mounted: function(){
            if(this.id){
                myAxios
                    .getMovie(this.id)
                    .then(answer => (this.myMovie = answer.data))
                    .catch(messageServ => console.log(messageServ));
            }
        }    
    }
</script>

<style>
    
</style>
