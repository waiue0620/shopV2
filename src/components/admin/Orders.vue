<template>
  <div>
    <!-- <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
    </div> -->
    <table class="table mt-5">
      <thead>
        <th>購買時間</th>
        <th>訂購人資訊</th>
        <th>購買款項</th>
        <th>備註</th>
        <th width="150">應付金額</th>
        <th width="150">是否付款</th>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td>
            <ul class="list-unstyled">
              <li>訂單ID：{{ item.id }}</li>
              <li>訂購人：{{ item.user.name }}</li>
              <li>信箱：{{ item.user.email }}</li>
              <li>住址：{{ item.user.address }}</li>
              <li>電話：{{ item.user.tel }}</li>
            </ul>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.message }}</td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :page-data="pagination" @emitPages="getOrders"></pagination>
  </div>
</template>

<script>
import pagination from '../Pagination'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tempOrders: {},
      isNew: false
    }
  },
  components: {
    pagination
  },
  methods: {
    getOrders (page = 1) {
      this.$store.dispatch('adminModules/getOrders', page)
    }
  },
  created () {
    this.getOrders()
  },
  computed: {
    ...mapGetters('adminModules', ['orders', 'pagination'])
  }
}
</script>
