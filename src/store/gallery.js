import axios from 'axios'

export default {
    namespaced: true,
    state: {
        pictures: [],
    },

    getters: {
        PICTURES: state => {
            return state.pictures;
        },
    },

    mutations: {
        SET_PICTURES: (state, payload) => {
            state.pictures = payload
        },
    },

    actions: {
        GET_PICTURES: async(context, payload) => {
            let { data } = await axios.get('gallery')
            context.commit('SET_PICTURES', data)
        },
    },

    modules: {

    }
}