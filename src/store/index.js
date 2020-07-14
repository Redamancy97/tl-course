import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfo} from "../api/user-api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        userInfo: {}
    },
    mutations: {
        changeLoginModelVisible(state, {isShow}) {
            state.loginModelVisible = isShow;
        },
        changeLogin(state, {isLogin}) {
            state.isLogin = isLogin;
        },
        changeUserInfo(state, {userInfo}) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        checkLoginStatus(context) {
            return getUserInfo().then(res => {
                if (res.data.code === 0) {
                    //
                    context.commit("changeLogin", {isLogin: true});
                    context.commit("changeUserInfo", {userInfo: res.data.userInfo});
                } else {
                    context.commit("changeLogin", {isLogin: false});
                    context.commit("changeUserInfo", {userInfo: {}});
                }

            })
        },
    },
    modules: {}
})
