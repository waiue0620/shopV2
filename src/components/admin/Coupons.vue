<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的優惠劵</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠碼名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th width="160">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group" role="group" aria-label="Second group">
              <button class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :page-data="pagination" @emitPages="getCoupons"></pagination>
<!-- Modal -->
  <!-- couponModal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                placeholder="請輸入標題">
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                placeholder="請輸入優惠碼">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date"
                v-model="due_date">
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" id="price"
                v-model="tempCoupon.percent" placeholder="請輸入折扣百分比">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled" id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"
              @click="updateCoupon">更新優惠券</button>
          </div>
        </div>
      </div>
    </div>

    <!-- delProductModal -->
    <div class="modal fade" id="delcouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠劵</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupons">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import pagination from '../Pagination'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: ''
      },
      isNew: false,
      due_date: new Date()
    }
  },
  components: {
    pagination
  },
  watch: {
    due_date () {
      const vm = this
      const timestamp = Math.floor(new Date(vm.due_date) / 1000)
      vm.tempCoupon.due_date = timestamp
    }
  },
  methods: {
    getCoupons (page = 1) {
      this.$store.dispatch('adminModules/getCoupons', page)
    },
    openModal (isNew, item) {
      const vm = this
      vm.isNew = isNew
      if (isNew) {
        vm.tempCoupon = {}
        vm.due_date = new Date().toISOString().split('T')[0]
      } else {
        vm.tempCoupon = Object.assign({}, item)
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T')
        vm.due_date = dateAndTime[0]
      }
      $('#couponModal').modal('show')
    },
    openDelCouponModal (item) {
      const vm = this
      $('#delcouponModal').modal('show')
      vm.tempCoupon = Object.assign({}, item)
    },
    // 編輯新增優惠券
    updateCoupon () {
      const vm = this
      let httpMethod = 'post'
      if (!vm.isNew) {
        httpMethod = 'put'
      }
      vm.$store.dispatch('adminModules/updateCoupon', { httpMethod: httpMethod, tempCoupon: vm.tempCoupon })
    },
    delCoupons () {
      const vm = this
      vm.$store.dispatch('adminModules/delCoupons', vm.tempCoupon)
    }
  },
  created () {
    this.getCoupons()
  },
  computed: {
    ...mapGetters('adminModules', ['coupons', 'pagination'])
  }
}
</script>
