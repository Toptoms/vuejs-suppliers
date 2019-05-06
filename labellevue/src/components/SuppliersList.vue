
<template>
  <div>
    <h1>Liste des fournisseurs</h1>
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
export default {
  components: { Supplier },
  data: function() {
    return {
      suppliers: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null
    };
  },
  mounted() {
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        this.suppliers = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>