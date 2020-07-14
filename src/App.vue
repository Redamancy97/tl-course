<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    // import {createKey, getItem} from "./utils/localstore";
    // import {getUserInfo} from "./api/user-api";

    export default {
        name: 'app',
        created() {
            //  同步localStorage
            // let isLogin = localStorage.getItem(createKey("isLogin"))||false;
            // let isLogin = getItem(createKey("isLogin"))
            // this.$store.commit("changeLogin", {isLogin});
            // let userInfo= JSON.parse(localStorage.getItem(createKey("userInfo"))|| '{}');
            // this.$store.commit("changeUserInfo", {userInfo});

            // getUserInfo().then(res=>{
            //     if (res.data.code===0){
            //         //
            //         this.$store.commit("changeLogin", {isLogin:true});
            //         this.$store.commit("changeUserInfo", {userInfo:res.data.userInfo});
            //     }
            //
            // })

            this.$store.dispatch("checkLoginStatus")
        }
    }
</script>

<style>
</style>
