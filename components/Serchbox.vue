<template>
    <div class="serch-box">
        <div class="input-group">
            <input type="text" class="form-control" v-model="searchStr" placeholder="community">
            <!-- <SerchCommunity /> -->
        </div>
        <div class="goyotashi-message">
            の御用達を
        </div>
        <button type="button" class="btn btn-default serch-botton" v-on:click="search(searchStr)" >検索</button>
    </div>
</template>

<script>

import searchCommunity from '../controller/SearchCommunity.js'
export default {

    methods: {
        search(str){
            console.log(str);
            
            searchCommunity(str);
        }
    },
    data: {
        searchStr: null
    }
}


</script>

<style scoped>
.serch-box{
    width:80%;
    /* height:120px; */
    margin:50px 10%;
    padding:2%;
    /* background-color: black; */
    border: solid;
    border-color:rgba(0,0,0,0.6);
    border-radius: 5px;
    overflow: hidden;
}

.form-control{
    margin-top:2%;
}

.goyotashi-message{
    float:left;
    padding:7px 3%;
    margin-top:2%;
}
.serch-botton{
    margin-top:2%;
    float:right;
    background-color: white;
    border-color:#ced4da;
}

/* .input-group{
    padding:10%;
    width:60%;
} */

</style>
