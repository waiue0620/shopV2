<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navber/>
    <Alert/>
    <TopSwiper/>
    <div class="container mt-5 content">
      <div class="row">
        <div class="col-md-6">
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-danger" @click="payOrder(orderId)">確認付款去</button>
          </div>
        </div>
      </div>
      <div class="text-center shopping" v-if="order.is_paid === true">
        <router-link class="btn btn-lg" to="/shopping">繼續購物去</router-link>
      </div>
    </div>
    <footer class="footer mt-3">
      <p class="text-center m-0">資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </footer>
  </div>
</template>

<script>
import Navber from '@/components/Navber'
import Alert from '@/components/AlertMessage'
import TopSwiper from '@/components/TopSwiper'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Navber,
    TopSwiper,
    Alert
  },
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    getOrder (orderId) {
      this.$store.dispatch('cartModules/getOrder', orderId)
    },
    payOrder (orderId) {
      this.$store.dispatch('cartModules/payOrder', orderId)
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder(this.orderId)
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModules', ['order'])
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #eaf0ed;
  padding: 10px;
  color: #3f5d45;
  font-weight: bold;
  font-family: Noto Sans TC,sans-serif!important;
}
.content {
  // padding-top: 56px;
  min-height: calc(100vh - 510px);
}
.shopping{
  .btn {
    background-color: #EAF0ED;
    color: #8DA291;
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;
    opacity: 1;
    &:hover {
      background-color: #ffe180;
      color: #3f5d45;
    }
  }
}

</style>
