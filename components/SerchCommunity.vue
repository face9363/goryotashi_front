<template>
    <div class="back-white">
    <!-- <p v-for="com in this.communities">{{com.data.name}}</p> -->
    <p v-for="res in searchStrResult">{{res}}</p>
    </div>

</template>

<script>
import searchCommunity from '../controller/SearchCommunity.js'
import Community from '../model/Community.js'
export default {

    data() {
        return {
            // communities:"str"
            communities: [
                new Community({id: "hee78h", name: "京都"}),
                new Community({id: "hdwih", name: "パレット"})
            ]
        }
    },
    props:["searchStrResult"],
    method: {
        search(){
        }
    }
}
</script>

<style scoped>
.back-white{
    background-color:white;
    border:solid #ced4da;
    border-width: 0px 1px;
    width:100%;
}
p{
    padding:8px 24px;
    margin:0;
    border-bottom:solid #ced4da;
    /*position: absolute;*/

}
</style>

