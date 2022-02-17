import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import axios from 'axios'

import app from './app.vue'
import router from './router'
import store from './store'

import moment from 'moment'
import Pagination from 'vue-pagination-2'
import VueSkeletonLoader from 'skeleton-loader-vue'
import VueSmoothScroll from 'vue2-smooth-scroll'
import Vuelidate from "vuelidate"

Vue.use(Vuelidate);

Vue.use(VueSmoothScroll, {
    duration: 1000,
    offset: -20, 
    updateHistory: false
})

// Register the component globally
Vue.component('vuekeleton', VueSkeletonLoader);

Vue.config.productionTip = false
Vue.component('vuegination', Pagination);

axios.defaults.baseURL = 'https://api.staugustineshg.org/api/v2/'

Vue.filter('formatDate', function(value) {
  if (value) {
    //return moment(String(value)).format('MM/DD/YYYY hh:mm')
    return moment(String(value)).fromNow()
  }
})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

Vue.filter('formatDateOne', function(d) {
    if (d) {
        var dt = new Date(d);
        return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}` 
    }
})

new Vue({
    render: h => h(app),
    store,
    router
}).$mount('#app')
router.afterEach((to, from) => {
    //document.title = to.meta.title;
});
