import axios from 'axios'

export default {
    namespaced: true,
    state: {
        
    },

    getters: {
        
    },

    mutations: {
        
    },

    actions: {
        SUBMIT_REQUEST: async (context, payload) => {
            let { data } = await axios.post('loans', payload)
            return data
        },
    },

    modules: {

    }
}