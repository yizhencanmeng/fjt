import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    zhang:""
  },
  mutations: {
    token(state,arg){
      state.token=arg
    },
    zhang(state,arg){
      state.zhang=arg
    },
    del(state){
      state.token=""
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    persistedState({ storage: window.sessionStorage })
]
})
