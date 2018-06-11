"use strict"

const AXIOS_MOVIE_URL = "http://videoclub.my/api/Movie/";

import axios from "axios";

export default{
    getMovies(){
        return axios.get(AXIOS_MOVIE_URL);
    },
    delMovie(id){
        return axios.delete(AXIOS_MOVIE_URL + id);
    },
    updateMovie(id, myMovie){
        return axios.put(AXIOS_MOVIE_URL + id, myMovie);
    },
    insertMovie(myMovie){
        return axios.post(AXIOS_MOVIE_URL, myMovie);
    },
    getMovie(id){
        return axios.get(AXIOS_MOVIE_URL +id);
    }
}