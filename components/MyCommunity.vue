<template>
    <div>
        <h2>自分のコミュニティ</h2>
        <button type="button" class="btn btn-outline-success btn-block login-button" v-on:click="mycom()">
            Log in</button>


    </div>

</template>

<script>
import MyCommunity from '../controller/community/MyCommunity.js'
export default {
    methods: {
        mycom(){
            console.log("a");
            MyCommunity();
        }
    }
}
</script>

<style scoped>

</style>
