
<template>
  <div class="container mb-5">
    <div>
      <h1>Carte des fournisseurs</h1>
      <gmap-map :center="{lat:46, lng:6}" :zoom="7" style="width: 100%; height: 500px">
        <GmapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="{lat:m.latitude, lng:m.longitude}"
          @click="true "
        />
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "suppliersmap",
  data() {
    return {
      markers: [
        {
          id: 1,
          latitude: 45.859779,
          longitude: 6.195746
        },
        {
          id: 2,
          latitude: 45.866360,
          longitude: 6.139886
        }
      ]
    };
  }
};
</script>