import Vue from 'vue'
import App from './App.vue'
//IMPORT ROUTER
import Router from "vue-router"
//COMPONENTS IMPORT
import MovieList from "./crud/MoviesListVIEW.vue";
import CreateMovie from "./crud/CUMovieVIEW.vue";
import UpdateMovie from "./crud/CUMovieVIEW.vue";
import ReadMovie from "./crud/RMovieVIEW.vue";

//ROUTE START
Vue.use(Router)
const router = new Router({
  routes:[
    {
      path: "/",
      component: MovieList
    },
    {
      path: "/newMovie",
      component: CreateMovie
    },
    {
      path: "/editMovie/:id",
      component: UpdateMovie,
      props: true
    },
    {
      path: "/showMovie:id",
      component: ReadMovie,
      props: true
    }
  ],
  mode: "history"
})
//ROUTE FINISH

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
