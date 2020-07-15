import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfo} from "../api/user-api";
import {goodsList} from "../api/tl-course-api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        userInfo: {},
        total: []
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
        },
        changeShopNumber(state, payload) {
            state.total = payload.total;
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
        checkShopCar(context){
            return goodsList().then(res=>{
                context.commit("changeShopNumber", {total: res.data.shoppingCartList})
            })
        }
    },
    getters: {
        getTotalNumber: state => {
            return state.total.length
        }
    },
    modules: {}
})
