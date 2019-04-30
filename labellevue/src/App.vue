<template>
  <div id="appcss" >
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bienvenue sur SpirulineShop"/>
    <Map></Map>
    <button v-on:click="onSuppliersListClick()">suppliers</button>
    <button v-on:click="onMapClick()">map</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Map from './components/SuppliersMap.vue'
import List from './components/SuppliersList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Map,
    List,
  },
    methods: {
    onSuppliersListClick: function() {
      alert("hello");
    },
    onMapClick: function() {
      alert("salut");
    }
  }
  
}

</script>

<style>
#appcss {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
