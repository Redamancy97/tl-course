import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './styles/base.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import store from './store';


new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
