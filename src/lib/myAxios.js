"use strict"

const AXIOS_MOVIE_URL = "http://videoclub.my/api/Movie";
const AXIOS_USER_URL = "http://videoclub.my/api/User";
const AXIOS_RENT_URL = "http://videoclub.my/api/Rent";

import axios from "axios";

export default{
    //START AXIOS MOVIE
    getMovies(){
        return axios.get(AXIOS_MOVIE_URL);
    },
    delMovie(id){
        return axios.delete(AXIOS_MOVIE_URL + "/" + id);
    },
    updateMovie(id, myMovie){
        return axios.put(AXIOS_MOVIE_URL + "/" + id, myMovie);
    },
    insertMovie(myMovie){
        return axios.post(AXIOS_MOVIE_URL, myMovie);
    },
    getMovie(id){
        return axios.get(AXIOS_MOVIE_URL + "/" + id);
    },
    //FINISH AXIOS MOVIE
    //START AXIOS USER
    getUsers(){
        return axios.get(AXIOS_USER_URL);
    },
    delUser(id){
        return axios.delete(AXIOS_USER_URL + "/" + id);
    },
    updateUser(id, myUser){
        return axios.put(AXIOS_USER_URL + "/" + id, myUser);
    },
    insertUser(myUser){
        return axios.post(AXIOS_USER_URL, myUser);
    },
    getUser(id){
        return axios.get(AXIOS_USER_URL + "/" + id);
    },
    //FINIS AXIOS USER
    //START AXIOS RENT
    getRents(){
        return axios.get(AXIOS_RENT_URL);
    },
    getRent(id){
        return axios.get(AXIOS_RENT_URL + "/" + id);
    },
    insertRent(myRent){
        return axios.post(AXIOS_RENT_URL, myRent);
    },
    updateRent(myRent){
        return axios.put(AXIOS_RENT_URL , myRent);
    }
    //FINISH AXIOS RENT
}