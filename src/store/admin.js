import axios from 'axios'
import $ from 'jquery'
import router from '../router'

export default {
  strict: true,
  namespaced: true,
  state: {
    products: [],
    pagination: {},
    imageUrl: '',
    orders: [],
    coupons: []
  },
  actions: {
    // Products
    getProducts (context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        console.log(response.data)
        context.commit('PRODUCTS', response.data.products)
        context.commit('PAGINATION', response.data.pagination)
        context.commit('LOADING', false, { root: true })
      })
    },
    updataProduct (context, { httpMethod, tempProduct }) {
      context.commit('LOADING', true, { root: true })
      $('#productModal').modal('hide')
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      if (httpMethod === 'put') {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${tempProduct.id}`
      }
      console.log(httpMethod, httpMethod === 'put', api, tempProduct)
      axios[httpMethod](api, { data: tempProduct }).then(response => {
        if (response.data.success) {
          context.dispatch('getProducts')
        } else {
          context.dispatch('getProducts')
          console.log('新增失敗')
        }
      })
    },
    delProduct (context, payload) {
      $('#delProductModal').modal('hide')
      context.commit('LOADING', true, { root: true })
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${payload.id}`
      axios.delete(api).then(response => {
        console.log(response.data)
        context.dispatch('getProducts')
      })
    },
    uploadFile (context, uploadedFile) {
      // console.log(this)
      // const uploadedFile = this.$refs.files.files[0]
      // const vm = this
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      context.commit('FILEUPLOADING', true, { root: true })
      return axios.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          // vm.tempProduct.imageUrl = response.data.imageUrl; 沒有雙向綁定所以要利用set來強制寫入
          // vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
          context.commit('IMAGEURL', response.data.imageUrl)
        } else {
          context.dispatch('alertModules/message', response, { root: true })
        }
        context.commit('FILEUPLOADING', false, { root: true })
      })
    },
    // Orders
    getOrders (context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        console.log(response.data)
        context.commit('ORDERS', response.data.orders)
        context.commit('PAGINATION', response.data.pagination)
        context.commit('LOADING', false, { root: true })
      })
    },
    // Sign
    signout () {
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      axios.post(url).then((response) => {
        if (response.data.success) {
          router.push('/signin')
        }
      })
    },
    // Coupons
    getCoupons (context, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        console.log(response.data)
        context.commit('COUPONS', response.data.coupons)
        context.commit('PAGINATION', response.data.pagination)
        context.commit('LOADING', false, { root: true })
      })
    },
    updateCoupon (context, { httpMethod, tempCoupon }) {
      context.commit('LOADING', true, { root: true })
      $('#couponModal').modal('hide')
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      if (httpMethod === 'put') {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${tempCoupon.id}`
      }
      axios[httpMethod](api, { data: tempCoupon }).then(response => {
        if (!response.data.success) {
          console.log('新增失敗')
        }
        context.dispatch('getCoupons')
      })
    },
    delCoupons (context, payload) {
      $('#delcouponModal').modal('hide')
      context.commit('LOADING', true, { root: true })
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${payload.id}`
      axios.delete(api).then(response => {
        context.dispatch('getCoupons')
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    IMAGEURL (state, payload) {
      state.imageUrl = payload
    },
    ORDERS (state, payload) {
      state.orders = payload
    },
    COUPONS (state, payload) {
      state.coupons = payload
    }
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination,
    imageUrl: state => state.imageUrl,
    orders: state => state.orders,
    coupons: state => state.coupons
  }
}
