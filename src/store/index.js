import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './products'
import cartModules from './cart'
import alertModules from './AlertMessage'
import adminModules from './admin'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    status: {
      loadingItem: '',
      fileUploading: false
    }
  },
  actions: {
    // updateLoading (context, status) {
    //   context.commit('LOADING', status)
    // },

  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    LOADINGITEM (state, payload) {
      state.status.loadingItem = payload
    },
    FILEUPLOADING (state, payload) {
      state.status.fileUploading = payload
    }
  },
  modules: {
    productsModules,
    cartModules,
    alertModules,
    adminModules
  },
  getters: {
    isLoading: state => state.isLoading,
    status: state => state.status
  }
})
