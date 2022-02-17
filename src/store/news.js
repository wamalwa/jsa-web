import axios from 'axios'

export default {
    namespaced: true,
    state: {
        news: [],
        page: [],
        news_details: null,
        categories: [],
        count: 0
    },

    getters: {
        NEWS: state => {
            return state.news;
        },
        PAGE: state => {
            return state.page;
        },
        NEWS_DETAILS: state => {
            return state.news_details;
        },
        CATEGORIES: state => {
            return state.categories;
        },
        COUNT: state => {
            return state.count;
        },
    },

    mutations: {
        SET_NEWS: (state, payload) => {
            state.news = payload
        },
        SET_PAGE: (state, payload) => {
            state.page = payload
        },
        SET_NEWS_DETAILS: (state, payload) => {
            state.news_details = payload
        },
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload
        },
        SET_COUNT: (state, payload) => {
            state.count = payload[0].count
        },
    },

    actions: {
        GET_NEWS: async (context) => {
            let { data } = await axios.get('news')
            context.commit('SET_NEWS', data)
        },
        GET_PAGE: async(context, payload) => {
            let { data } = await axios.post('news/page', payload)
            context.commit('SET_PAGE', data)
        },
        GET_CATEGORY_PAGE: async(context, payload) => {
            let { data } = await axios.post('news/page/category', payload)
            context.commit('SET_PAGE', data)
        },
        GET_NEWS_DETAILS: async (context, payload) => {
            let { data } = await axios.get(`news/${payload}`)
            context.commit('SET_NEWS_DETAILS', data)
        },
        GET_CATEGORIES: async (context) => {
            let { data } = await axios.get(`categories/count/news`)
            context.commit('SET_CATEGORIES', data)
        },
        GET_NEWS_COUNT: async(context) => {
            let { data } = await axios.get('news/count')
            context.commit('SET_COUNT', data)
        },
        GET_CATEGORY_NEWS_COUNT: async(context, payload) => {
            let { data } = await axios.get(`news/count/${payload}/category`)
            context.commit('SET_COUNT', data)
        },
    },

    modules: {

    }
}