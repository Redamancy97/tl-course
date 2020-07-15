import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/index/Index";
import OtherLayout from "../layout/OtherLayout";
import Details from "../views/Details/Details";
// import VideoDetails from "../views/Details/components/VideoDetails";
import ShopCar from "../views/ShopCar/ShopCar";
// import Details from "../views/Details/Details";
import store from "../store";
import CourseIntroduce from "../views/Details/components/CourseIntroduce";
import VideoDetails from "../views/Details/components/VideoDetails";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/index",
    },
    {
        path: '/index',
        // name: 'Index',
        component: IndexLayout,
        children: [{
            path: "",
            component: Index,
            meta: {
                title: "首页"
            }
        }]
    },
    {
        path: '/other',
        // name: 'Index',
        component: OtherLayout,
        children: [{
            path: "detail/:courseId",
            component: Details,
            meta: {
                title: "课程详情"
            },
            children: [{
                path: '',
                component: CourseIntroduce
            }, {
                path: '/study/course/:courseId',
                // name: 'Index',
                component: VideoDetails,
                meta: {
                    title: "视频详情",
                    isAuth: true
                }
            }]
        }]
    },

    {
        path: '/shop',
        // name: 'Index',
        component: OtherLayout,
        children: [{
            path: "",
            component: ShopCar,
        }],
        meta: {
            title: "购物车",
            isAuth: true
        }
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const loginPromise = store.dispatch("checkLoginStatus");

//增加了路由前置守卫
router.beforeEach((to, from, next) => {
    // 在跳转之前增加了逻辑判断，根据不同的状态判断是否跳转到指定页面
    if (to.meta.isAuth) {
        //需要鉴权的
        loginPromise.then(() => {
            if (store.state.isLogin) {
                next()
            } else {
                store.commit("changeLoginModelVisible", {isShow: true})
                next("/index")
            }
        })
    } else {
        next();
    }
})


export default router
