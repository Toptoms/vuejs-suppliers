
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
import Supplier from "./Supplier.vue";
export default {
components: {Supplier},
data() {
  return {
    suppliers: [
      {
        id: 1,
        name: "Fournisseur 1",
        status: true,
        checkedAt: new Date().toLocaleString()
      },
      {
        id: 2,
        name: "Fournisseur 2",
        status: false,
        checkedAt: new Date().toLocaleString()
      },
       {
        id: 3,
        name: "Fournisseur 3",
        status: true,
        checkedAt: new Date().toLocaleString()
      },
       {
        id: 4,
        name: "Fournisseur 4",
        status: false,
        checkedAt: new Date().toLocaleString()
      }
    ]
  }
}
}
</script>