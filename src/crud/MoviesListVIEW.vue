<template>
    <div class="table-responsive">
        <a name="moviesList"></a>
        <h2>Movies list</h2>
        <search-element 
            v-bind:search="search" 
            v-on:search="mySearch"
        ></search-element>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Poster</th>
                    <th>Disponibility</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <movies-list 
                    v-for="(movie, index) in moviesFilter" 
                    v-bind:key="index" 
                    v-bind:item="movie" 
                    v-on:refreshPage="myRefreshPage"
                ></movies-list>
            </tbody>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Poster</th>
                    <th>Disponibility</th>
                    <th>Actions</th>
                </tr>
            </tfoot>
        </table>
        <general-button 
            typeGlyphicon="success" 
            buttonTitle="Add new element" 
            v-on:clic="newMovie"
        ></general-button>
    </div>
</template>

<script>
    import myAxios from "../lib/myAxios.js";
    import SearchElement from "./SearchElement.vue";
    import MoviesList from "./MoviesList.vue";
    import GeneralButton from "./GeneralButton.vue";
    export default {
        name: "MovieListVIEW",
        components: {
            "search-element": SearchElement,
            "movies-list": MoviesList,
            "general-button": GeneralButton
        },
        data() {
            return {
                movies: [],
                search: ""
            }
        },        
        computed: {
            moviesFilter() {
                return this.movies.filter(element => element.title.includes(this.search));
            }
        },
        mounted: function() {
            this.myRefreshPage();
        },
        methods: {
            mySearch: function(search) {
                this.search = search;
            },
            newMovie: function() {
                this.$router.push("/newMovie");
            },
            myRefreshPage: function() {
                myAxios
                    .getMovies()
                    .then(answer => (this.movies = answer.data))
                    .catch(messageServ => console.log(messageServ))
            }
        }
    }
</script>

<style>
    
</style>
