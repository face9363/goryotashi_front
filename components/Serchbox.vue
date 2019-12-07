<template>
    <div class="serch-box">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="community">
            <!-- <span class="input-group-btn">
                <button type="button" class="btn btn-default">検索</button>
            </span> -->
        </div>
        <div class="goyotashi-message">
            の御用達を
        </div>
        <button type="button" class="btn btn-default serch-botton">検索</button>
    </div>
</template>

<style scoped>
.serch-box{
    width:80%;
    height:120px;
    margin:50px 10%;
    padding:5%;
    /* background-color: black; */
    border: solid;
    border-color:rgba(0,0,0,0.6);
    border-radius: 5px;
}

.goyotashi-message{
    float:left;
    padding:17px 13px;
}
.serch-botton{
    margin-top:10px;
    float:right;
    background-color: white;
    border-color:#ced4da;
}

/* .input-group{
    padding:10%;
    width:60%;
} */

</style>