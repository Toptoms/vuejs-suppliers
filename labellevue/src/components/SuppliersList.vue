
<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <section v-if="errored">
      <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
    </section>
    <section v-else>
      <div v-if="loading">Chargement...</div>
    </section>
    <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    ></Supplier>
  </div>
</template>

<script>
import axios from "axios";
import Supplier from "./Supplier.vue";
import Vuex from "vuex";
export default {
  components: { Supplier },

  computed: Vuex.mapState(["suppliers", "loading", 'errored']),
  mounted() {
    this.$store.dispatch("loadData");
  }
};
</script>