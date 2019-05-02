

<template>
  <div >
   <h1>Carte des fournisseurs</h1>
   <gmap-map
  :center="{lat:10, lng:10}"
  :zoom="7"
  style="width: 50%; height: 200px"
>
</gmap-map>
  </div>
</template>

<script>
export default{
  name:"suppliersmap"

}
</script>