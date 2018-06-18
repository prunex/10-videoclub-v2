<template>
    <div>
        <a name="showMovie"></a>
        <h2>Show Movie</h2>

        <!-- INICIO Series de botonos -->
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Actions</h3>
            </div>
            <div class="panel-body">
                <div class="control-group">
                    <div class="controls">
                        <!-- Buttons -->
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="First"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Previous"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Next"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Last"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="warning"
                                buttonTitle="Edit"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="primary"
                                buttonTitle="Back"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN Series de botonos -->

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">ID</h3>
            </div>
            <div class="panel-body">{{ myMovie.id }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Title</h3>
            </div>
            <div class="panel-body">{{ myMovie.title }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Year</h3>
            </div>
            <div class="panel-body">{{ myMovie.year }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Director</h3>
            </div>
            <div class="panel-body">{{ myMovie.director }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Poster</h3>
            </div>
            <div class="panel-body">{{ myMovie.poster }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Rented</h3>
            </div>
            <div class="panel-body">{{ myMovie.rented ? 'Alquilada' : 'Disponible' }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Synopsis</h3>
            </div>
            <div class="panel-body">{{ myMovie.synopsis }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Created at</h3>
            </div>
            <div class="panel-body">{{ myMovie.created_at }}</div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Updated at</h3>
            </div>
            <div class="panel-body">{{ myMovie.updated_at }}</div>
        </div>

        <!-- INICIO Series de botonos -->
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Actions</h3>
            </div>
            <div class="panel-body">
                <div class="control-group">
                    <div class="controls">
                        <!-- Buttons -->
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="First"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Previous"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Next"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="link"
                                buttonTitle="Last"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="warning"
                                buttonTitle="Edit"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                        <a href="#listUser">
                            <general-button
                                typeGlyphicon="primary"
                                buttonTitle="Back"
                                v-on:clic="backToIndex"
                            ></general-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN Series de botonos -->
        
    </div>    
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "ReadMovie",
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
        props:["id"],
        methods:{
            backToIndex: function(){
                this.$router.push("/")
            }
        },
        mounted: function(){
            if(this.id){
                myAxios
                    .getMovie(this.id)
                    .then(answer => (this.myMovie = answer.data))
                    .catch(messageSrv => console.log(messageSrv))
            }
        }     
    }
</script>

<style>

</style>
