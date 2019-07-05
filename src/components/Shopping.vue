<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-4">
      <div class="row justify-content-end">
        <div class="col-md-8 col-lg-4">
          <div class="input-group mb-4">
            <input type="text" class="form-control border border-main text-main" placeholder="Search something..."
              v-model.trim="searchFilter" @input="searchProducts">
            <div class="input-group-append">
              <button class="btn btn-becare text-main border border-main border-left-0" type="button" @click="searchProducts">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <ul class="menu-group">
            <li><a href="#" @click.prevent="changeTab('All')" :class="{'active':prodCategory==='All'}">所有產品</a></li>
            <li><a href="#" @click.prevent="changeTab('沙發')" :class="{'active':prodCategory==='沙發'}">沙發</a></li>
            <li><a href="#" @click.prevent="changeTab('桌')" :class="{'active':prodCategory==='桌'}">桌</a></li>
            <li><a href="#" @click.prevent="changeTab('收納')" :class="{'active':prodCategory==='收納'}">收納</a></li>
          </ul>
        </div>
        <div class="col-md-8 col-lg-9">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="item in filterPager" :key="item.id">
              <ItemCard :card-data="item" :loadingStatus="status" @addtoCart="addtoCart"></ItemCard>
            </div>
          </div>
        <pagination :page-data="pagination" @emitPages="getPagination"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import pagination from '@/components/Pagination'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ItemCard,
    pagination
  },
  data () {
    return {
      pagination: {
        page_Size: 6,
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false
      },
      prodCategory: 'All',
      searchFilter: '',
      searchResult: []
    }
  },
  methods: {
    getPagination (page) {
      const vm = this
      vm.pagination.current_page = page
      window.scrollTo({ top: 430 })
    },
    changeTab (prodCategory) {
      const vm = this
      vm.prodCategory = prodCategory
      vm.pagination.current_page = 1
    },
    searchProducts () {
      const vm = this
      vm.pagination.current_page = 1
      vm.prodCategory = 'All'
      if (vm.searchFilter) {
        vm.searchResult = vm.products.filter((item) => { return item.title.match(vm.searchFilter) })
      } else {
        // 清除搜尋結果
        vm.searchResult = []
      }
    },
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  created () {
    this.getProducts()
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.searchFilter || vm.searchResult.length) {
        return vm.searchResult
      } else {
        return vm.products.filter((item) => {
          return vm.prodCategory === 'All' ? item : item.category === vm.prodCategory
        })
      }
    },
    filterPager () {
      const vm = this
      const pageSize = vm.pagination.page_Size
      vm.pagination.total_pages = Math.ceil(vm.filterData.length / pageSize)
      let nowPage = vm.pagination.current_page
      // 上一頁與下一頁
      if (nowPage > 1) {
        vm.pagination.has_pre = true
      } else {
        vm.pagination.has_pre = false
      }
      if (nowPage < vm.pagination.total_pages) {
        vm.pagination.has_next = true
      } else {
        vm.pagination.has_next = false
      }
      return vm.filterData.filter((item, index) => {
        return index >= (nowPage - 1) * pageSize && index < (nowPage * pageSize)
      })
    },
    ...mapGetters(['isLoading', 'status']),
    ...mapGetters('productsModules', ['categories', 'products'])
  }
}
</script>

<style lang="scss" scoped>
.menu-group {
  list-style:none;
  padding: 0;
  border: 1px solid #8da291;
  border-bottom: none;
  .active {
    text-decoration: none;
    background: #ffe180;
  }
  a {
    border-bottom: 1px solid #8da291;
    padding: 10px;
    font-size: 16px;
    font-weight: bolder;
    color: #3f5d45;
    display: flex;
    justify-content: center;
    &:hover {
      text-decoration: none;
      background: #ffe180;
    }
  }
}
</style>
