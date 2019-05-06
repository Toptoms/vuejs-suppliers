
<template>
  <div class="container mb-5">
    <div>
      <h1>Carte des fournisseurs</h1>
      <gmap-map :center="{lat:46, lng:6}" :zoom="7" style="width: 100%; height: 500px">
        <GmapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="{lat:parseFloat(m.latitude), lng:parseFloat(m.longitude)}"
          @click="true "
        />
      </gmap-map>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      markers: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null
    };
  },
  mounted() {
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        this.markers = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>