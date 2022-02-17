import axios from 'axios'

export default {
    namespaced: true,
    state: {
        events: null,
    },

    getters: {
        EVENTS: state => {
            return state.events;
        }
    },

    mutations: {
        SET_EVENTS: (state, payload) => {
            state.events = payload
        },
    },

    actions: {
        GET_EVENTS: async (context) => {
            let { data } = await axios.get('events')
            context.commit('SET_EVENTS', data)
        },
    },

    modules: {

    }
}