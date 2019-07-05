<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <Navber></Navber>
    <Alert></Alert>
    <div class="container mt-4 content">
      <div class="row">
        <div class="col-md-7">
          <img class="bg-cover img-fluid" :src="product.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h2>{{ product.title }}</h2>
          <p>{{product.description}}</p>
          <div class="d-flex justify-content-between">
            <span>原價 {{product.origin_price | currency}}</span>
            <h4 class="text-danger">售價 {{product.price | currency}}</h4>
          </div>
          <select name="" class="form-control mt-3" v-model="num">
            <option :value="num" v-for="num in 10" :key="num">
              選購 {{num}} {{product.unit}}
            </option>
          </select>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary"
              @click="addtoCart(product.id, num)" :disabled="status.loadingItem != ''">
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <CardSwiper class="mt-5" :card="product"></CardSwiper>
    <footer class="footer mt-3">
      <p class="text-center m-0">資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </footer>
  </div>
</template>

<script>
import Navber from '@/components/Navber'
import Alert from '@/components/AlertMessage'
import CardSwiper from '@/components/CardSwiper'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navber,
    Alert,
    CardSwiper
  },
  data () {
    return {
      productId: '',
      num: 1
    }
  },
  methods: {
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
    }
  },
  created () {
    this.productId = this.$route.params.productId
    this.getProduct(this.productId)
  },
  computed: {
    ...mapGetters(['isLoading', 'status']),
    ...mapGetters('productsModules', ['product'])
  },
  watch: {
    '$route.params.productId': function () {
      const vm = this
      vm.productID = vm.$route.params.productId
      vm.getProduct(vm.productID)
    }
  }
}
</script>
<style lang="scss" scoped>

.bg-cover {
  background-size: cover;
  background-position: center center;
}
.detailedImg {
  max-width: 100%;
}
.footer {
  background-color: #eaf0ed;
  padding: 10px;
  color: #3f5d45;
  font-weight: bold;
  font-family: Noto Sans TC,sans-serif!important;
}
.content {
  padding-top: 56px;
}
</style>
