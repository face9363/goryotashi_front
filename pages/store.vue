<template>
  <div class="container">
    <h2>ラジュ</h2>
    <h3>コメント</h3>
    <RestaurantComment />
    <h3>他のコミュニティコメント</h3>
    <RestaurantComment />
    
    
      
  </div>
</template>

<script>
import RestaurantComment from '~/components/RestaurantComment.vue'

export default {
  components: {
    RestaurantComment
  }
}
</script>

<style scoped>


.container {
  margin: 0 auto;
  padding: 0;
}


</style>
