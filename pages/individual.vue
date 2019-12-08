<template>
  <div class="container">
    <h2>御用達の店</h2>
    <Chose/>
    <RestaurantCard />

    
      
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard.vue'
import  Chose from '~/components/Chose.vue'

export default {
  components: {
    RestaurantCard,
    Chose
  }
}
</script>

<style scoped>


.container {
  margin: 0 auto;
  padding: 0;
}


</style>
