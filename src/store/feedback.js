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
        SEND_MESSAGE: async (context, payload) => {
            let { data } = await axios.post('feedback', payload)
            return data
        },
    },

    modules: {

    }
}