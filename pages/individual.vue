<template>
  <div class="container">
    <h2>御用達の店</h2>
    <RestaurantCard />
    
      
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard.vue'

export default {
  components: {
    RestaurantCard
  }
}
</script>

<style scoped>


.container {
  margin: 0 auto;
  padding: 0;
}


</style>
