<template>
    <div>
        <a name="showMovie"></a>
        <h2>Show Movie</h2>

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
            <div class="panel-body">{{ myMovie.rented }}</div>
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

        <div class="control-group">
            <!-- Button -->
            <div class="controls">
                <a href="#listMovie">
                    <general-button
                        typeGlyphicon="primary"
                        titleButton="Back"
                        v-on:clic="backToIndex"
                    ></general-button>
                </a>
            </div>
        </div>
    </div>    
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "Read movie",
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
        component:{
            "general-button": GeneralButton
        },
        props:["id"],
        methods:{
            backToIndex: function(){
                this.$router.push("/")
            }
        },
        mounted: function(){

        }     
    }
</script>

<style>

</style>
