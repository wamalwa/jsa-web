import axios from 'axios'

export default {
    namespaced: true,
    state: {
        csi: [],
        page: [],
        csi_details: null,
        categories: [],
        count: 0
    },

    getters: {
        CSI: state => {
            return state.csi;
        },
        PAGE: state => {
            return state.page;
        },
        CSI_DETAILS: state => {
            return state.csi_details;
        },
        CATEGORIES: state => {
            return state.categories;
        },
        COUNT: state => {
            return state.count;
        },
    },

    mutations: {
        SET_CSI: (state, payload) => {
            state.csi = payload
        },
        SET_PAGE: (state, payload) => {
            state.page = payload
        },
        SET_CSI_DETAILS: (state, payload) => {
            state.csi_details = payload
        },
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload
        },
        SET_COUNT: (state, payload) => {
            state.count = payload[0].count
        },
    },

    actions: {
        GET_CSI: async (context) => {
            let { data } = await axios.get('csi')
            context.commit('SET_CSI', data)
        },
        GET_PAGE: async(context, payload) => {
            let { data } = await axios.post('csi/page', payload)
            context.commit('SET_PAGE', data)
        },
        GET_CATEGORY_PAGE: async(context, payload) => {
            let { data } = await axios.post('csi/page/category', payload)
            context.commit('SET_PAGE', data)
        },
        GET_CSI_DETAILS: async (context, payload) => {
            let { data } = await axios.get(`csi/${payload}`)
            context.commit('SET_CSI_DETAILS', data)
        },
        GET_CATEGORIES: async (context) => {
            let { data } = await axios.get(`categories/count/csi`)
            context.commit('SET_CATEGORIES', data)
        },
        GET_CSI_COUNT: async(context) => {
            let { data } = await axios.get('csi/count')
            context.commit('SET_COUNT', data)
        },
        GET_CATEGORY_CSI_COUNT: async(context, payload) => {
            let { data } = await axios.get(`csi/count/${payload}/category`)
            context.commit('SET_COUNT', data)
        },
    },

    modules: {

    }
}