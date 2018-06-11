<template>
  <div id="app">
    <div class="container">
      <div class="table-responsive">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a href="#" class="navbar-brand">{{ msg1 }}</a>
            </div>
            <ul class="nav navbar-nav">
              <li><router-link to="/">Movie list</router-link></li>
              <li><router-link to="/newMovie">New movie</router-link></li>
            </ul>
          </div>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesListVIEW from "./crud/MoviesListVIEW.vue"
export default {
  name: 'appVue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: "VideoClub"
    }
  },
  components:{
    "movies-list": MoviesListVIEW
  }
}
</script>

<style>
</style>
