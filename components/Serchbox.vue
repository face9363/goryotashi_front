<template>
    <div class="serch-box">
        <div class="input-group">
            <input type="text" class="form-control" v-model="searchStr" v-bind:style="{borderRadius:bor}" placeholder="community">
            <!-- <div v-if="searchflag">
                <serchCommunity />
            </div> -->
            <serchCommunity v-if="searchflag" v-bind:searchStrResult="searchStrResult"/>
            <!-- <SerchCommunity /> -->
        </div>
        <div class="goyotashi-message">
            の御用達を
        </div>
        <button type="button" class="btn btn-default serch-botton" v-on:click="search(searchStr), setBorderRadius()">検索</button>

    </div>
</template>

<script>
    import searchCommunity from '../controller/SearchCommunity.js'
    import serchCommunity from './SerchCommunity.vue'
    import Community from "../model/Community";

    export default {
        components: {
            serchCommunity
        },

        data: function () {
            return {
                searchflag: false,
                searchStr: null,
                searchStrResult: null,
                bor: "5px",
                communities: [
                    new Community({id: "hee78h", name: "京都"}),
                    new Community({id: "hdwih", name: "パレット"})
                ]
            }
        },

        methods: {
            search(str) {
                console.log(str);
                // this.searchStrResult = searchCommunity(str);
                this.searchflag = true;
                this.searchStrResult = str;
            },
            setBorderRadius() {
                this.bor = "5px 5px 0 0";
                console.log(this.bor);
            }
            // data: {
            //     searchStr: null
            // }
        }
    }

</script>

<style scoped>
    .serch-box {
        width: 80%;
        /* height:120px; */
        margin: 50px 10%;
        padding: 2%;
        /* background-color: black; */
        border: solid;
        border-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        overflow: hidden;
    }

    .form-control {
        margin-top: 2%;
        border-radius: 5px;
    }

    .goyotashi-message {
        float: left;
        padding: 7px 3%;
        margin-top: 2%;
    }

    .serch-botton {
        margin-top: 2%;
        float: right;
        background-color: white;
        border-color: #ced4da;
    }

    /* .input-group{
        padding:10%;
        width:60%;
    } */

</style>
