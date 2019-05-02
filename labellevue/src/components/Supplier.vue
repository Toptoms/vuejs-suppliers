
<template>
  <div class="card">
    <h1>Fournisseur: {{name}}</h1>
    <h3 :class="{'text-success':status, 'text-danger' : !status}">Stock: {{status ? 'OK' : 'KO'}}</h3>
    <h5>{{checkedAt}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    status: Boolean, // est ce qu'il y a du stock
    checkedAt: String // date de la dernière mise à jour du stock
  }
};
</script>

