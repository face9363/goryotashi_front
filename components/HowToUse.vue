<template>
    <div class="how-to-use">
        <h2>How to use</h2>
        <p>検索ボックスにコミュニティ名を入れて検索するとそのコミュニティ御用達の店が見られます。</p>
        <p>ログインすると御用達の店を追加することができます。</p>
        <button type="button" class="btn btn-outline-success btn-block login-button" v-on:click="log()">
            Log in</button>

    </div>
</template>

<script>
import login from '../controller/Login.js'
export default {
    methods: {
        log(){
            login();
        }
    }
}
</script>

<style scoped>

.how-to-use{
    overflow: hidden;
}

.btn-block{
    width: 80%;
    margin: 5% auto;
}
</style>