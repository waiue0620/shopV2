import axios from 'axios'
import router from '../router'

export default {
  strict: true,
  namespaced: true,
  state: {
    cart: {
      carts: []
    },
    order: {
      user: {}
    }
  },
  actions: {
    getCart (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(url).then(response => {
        context.commit('CART', response.data.data)
      })
    },
    addtoCart (context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADINGITEM', id, { root: true })
      const cart = {
        product_id: id,
        qty
      }
      axios.post(url, { data: cart }).then((response) => {
        context.commit('LOADINGITEM', '', { root: true })
        context.dispatch('getCart')
        context.dispatch('alertModules/message', response, { root: true })
      })
    },
    createOrder (context, form) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      context.commit('LOADING', true, { root: true })
      axios.post(url, { data: form }).then((response) => {
        // vm.getCart()
        if (response.data.success) {
          router.push(`/check_order/${response.data.orderId}`)
        }
        context.dispatch('alertModules/message', response, { root: true })
      })
      context.commit('LOADING', false, { root: true })
    },
    addCouponCode (context, payload) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      context.commit('LOADING', true, { root: true })
      const coupon = {
        code: payload
      }
      axios.post(url, { data: coupon }).then((response) => {
        context.dispatch('getCart')
        context.dispatch('alertModules/message', response, { root: true })
        context.commit('LOADING', false, { root: true })
      })
    },
    removeCartItem (context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true, { root: true })
      axios.delete(url).then((response) => {
        context.dispatch('getCart')
        console.log(response)
        context.commit('LOADING', false, { root: true })
        // vm.message(response)
        context.dispatch('alertModules/message', response, { root: true })
      })
    },
    getOrder (context, payload) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${payload}`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then(response => {
        context.commit('ORDER', response.data.order)
        console.log(response)
        context.commit('LOADING', false, { root: true })
      })
    },
    payOrder (context, payload) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${payload}`
      context.commit('LOADING', true, { root: true })
      axios.post(url).then(response => {
        console.log(response)
        if (response.data.success) {
          context.dispatch('getOrder', payload)
        }
        context.commit('LOADING', false, { root: true })
        context.dispatch('alertModules/message', response, { root: true })
      })
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    },
    ORDER (state, payload) {
      state.order = payload
    }
  },
  getters: {
    cart: state => state.cart,
    order: state => state.order
  }
}
