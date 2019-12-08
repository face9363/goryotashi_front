<template>
    <n-link to="store">
        <div class="restaurant-card">
            <div class="card-top">
                <div class="store-name">
                    ラジュ
                </div>
                <div class="fav-number">
                    610いいね
                </div>
            </div>
            <div　class="comment">
                ナン食べ放題のおいしいインドカレー屋です。
            </div>
            
        </div>
    </n-link>
</template>

<style scoped>
.restaurant-card{
    border:solid;
    border-color:rgba(0,0,0,0.6);
    border-radius: 5px;
    width:80%;
    margin:0 auto;
    padding:2%;
}

.restaurant-card:hover{
    background-color:rgba(0,0,0,0.1);
}

.card-top{
    border-bottom:solid #ced4da;
    overflow: hidden;
}

.store-name {
    font-family: 'Century Gothic';
    color:#f7b977;
    padding: 2px 5px;
    font-size: 20px;
    /* border-bottom:solid #ced4da; */
    float:left;

}

.fav-number{
    float:right;
}

.comment{
    padding:0.5em;
}

</style>