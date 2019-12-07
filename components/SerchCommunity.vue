<template>
    <div>
        <h2>自分のコミュニティ</h2>

    </div>
    
</template>

<script>
import searchCommunity from '../controller/SearchCommunity.js'
export default {

    methods: {
        search(){
            searchCommunity();
        }
    }
}
</script>

<style scoped>

</style>

