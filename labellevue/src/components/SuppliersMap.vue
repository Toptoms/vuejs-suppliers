
<template>
  <div class="container mb-5">
    
      <div>
        <h1>Carte des fournisseurs</h1>
        <gmap-map :center="{lat:10, lng:10}" :zoom="7" style="width: 100%; height: 500px"></gmap-map>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "suppliersmap"
};
</script>