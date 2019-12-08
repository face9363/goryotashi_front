<template>
    <div>
        <h2>自分のコミュニティ</h2>

    </div>

</template>

<script>
import searchCommunity from '../controller/community/SearchCommunity.js'
export default {

    methods: {
        search(){
            console.log();
            searchCommunity();
        }
    }
}
</script>

<style scoped>

</style>

