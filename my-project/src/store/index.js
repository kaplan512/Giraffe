import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: ''
    },
    actions: {
        addUser({commit}, user) {
            commit('ADD_USER', user)
        }
    },
    mutations: {
        ADD_USER(state, user){
            state.currentUser = user;
        }
    },
    getters: {
        currentUser(state) {
            return state.currentUser
        }
    }
});

export default store