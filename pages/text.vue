<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        goyoutashi_front
      </h1>
      <h2 class="subtitle">
        show community&#39;s restaurant {{this.comList}}
      </h2>
      <div class="links">
        <button @click="log">LOGIN</button>
        <button @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import login from "../controller/session/Login";
  import searchCommunity from "../controller/community/SearchCommunity";
  import myCommunity from "../controller/community/MyCommunity";
  import myInfoViaFirebase from "../controller/session/MyInfoViaFirebase";
  import logut from "../controller/session/Logout";

  export default {
    components: {
      Logo
    },
    data(){
        return {comList: null}
    },
    methods: {
      log() {
        login()
      },
      async search(){
        this.comList = await myInfoViaFirebase()
      }
    }
  }
</script>
