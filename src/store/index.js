import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

import landing from './landing'
import event from './event'
import news from './news'
import csi from './csi'
import feedback from './feedback'
import loan from './loan'
import gallery from './gallery'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        
    },

    getters: {
        
    },

    mutations: {
        
    },

    actions: {
        
    },

    modules: {
        landing,
        event,
        news,
        csi,
        feedback,
        loan,
        gallery
    }
})