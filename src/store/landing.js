import axios from 'axios'

export default {
    namespaced: true,
    state: {
        carousels: [],
        faqs: [],
        services: [],
        testimonials: [],
        website: { id: 0, name: "", web_address: "", mission: "", vision: "", about: "", svc_photo_url: "", address: "", phone: "", email: "" }
    },

    getters: {
        WEBSITE: state => {
            return state.website;
        },
        CAROUSELS: state => {
            return state.carousels;
        },
        FAQS: state => {
            return state.faqs;
        },
        SERVICES: state => {
            return state.services;
        },
        TESTIMONIALS: state => {
            return state.testimonials;
        }
    },

    mutations: {
        SET_WEBSITE: (state, payload) => {
            state.website = payload
        },
        SET_CAROUSELS: (state, payload) => {
            state.carousels = payload
        },
        SET_FAQS: (state, payload) => {
            state.faqs = payload
        },
        SET_SERVICES: (state, payload) => {
            state.services = payload
        },
        SET_TESTIMONIALS: (state, payload) => {
            state.testimonials = payload
        },
    },

    actions: {
        GET_WEBSITE: async (context) => {
            let { data } = await axios.get('landing/website')
            context.commit('SET_WEBSITE', data)
        },
        GET_CAROUSELS: async (context) => {
            let { data } = await axios.get('landing/carousel')
            context.commit('SET_CAROUSELS', data)
        },
        GET_FAQS: async (context) => {
            let { data } = await axios.get('landing/faq')
            context.commit('SET_FAQS', data)
        },
        GET_SERVICES: async (context) => {
            let { data } = await axios.get('landing/services')
            context.commit('SET_SERVICES', data)
        },
        GET_TESTIMONIALS: async (context) => {
            let { data } = await axios.get('landing/testimonials')
            context.commit('SET_TESTIMONIALS', data)
        },
    },

    modules: {

    }
}