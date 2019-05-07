
<template>
  <div class="container mb-5">
    <div>
      <h1>Carte des fournisseurs</h1>
      <section v-if="errored">
        <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
      </section>
      <section v-else>
        <div v-if="loading">Chargement...</div>
      </section>
      <gmap-map :center="{lat:46, lng:6}" :zoom="7" style="width: 100%; height: 500px">
        <GmapMarker
          v-for="(m, index) in suppliers"
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
import Vuex from "vuex";
export default {
  computed: Vuex.mapState(["suppliers", "loading", "errored"]),
  mounted() {
    this.$store.dispatch("loadData");
  }
};
</script>