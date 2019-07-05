import axios from 'axios'

export default {
  strict: true,
  namespaced: true,
  state: {
    products: [],
    categories: [],
    product: {}
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('LOADING', false, { root: true })
      })
    },
    getProduct (context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then((response) => {
        context.commit('PRODUCT', response.data.product)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    }
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
    product: state => state.product
  }
}
