<template>
    <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">選んでください</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
<!--            <option selected>Choose...</option>-->
            <option value="review">評価順</option>
            <option value="abc">名前順</option>
            <option value="random">ランダム</option>
        </select>
    </form>
</template>

<script>
    export default {
        name: "chose"
    }
</script>

<style scoped>
    .form-inline{
        width:80%;
        margin: 0 auto;
    }

</style>