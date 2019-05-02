<template>
  <div id="appcss">
    <img alt="Vue logo" src="./assets/vert.jpg">
    <Home msg="Bienvenue sur SpirulineShop"/>
    <router-link to="/suppliers" class="btn btn-success mr-2">Liste des fournisseurs</router-link>
    <router-link to="/map" class="btn btn-success mr-2">Carte des fournisseurs</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#appcss {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
