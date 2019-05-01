<template>
  <div id="appcss">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Bienvenue sur SpirulineShop"/>

    <router-link to="/suppliers">
      <button v-on:click="onSuppliersListClick()">suppliers</button>
    </router-link>
    <router-link to="/map">
      <button v-on:click="onMapClick()">map</button>
    </router-link>
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
