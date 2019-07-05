<template>
  <div>
    <div class="container p-0">
      <div>
        <swiper :options="swiperOption" class="">
          <swiper-slide v-for="item in filterData" :key="item.id">
            <ItemCard :card-data="item" :loadingStatus="status" @addtoCart="addtoCart"></ItemCard>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    ItemCard
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 10, // 在slide之间设置距离（单位px）。
        centeredSlides: false, // 设定为true时，active slide会居中，而不是默认状态下的居左。
        grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
        },
        autoplay: {
          delay: 4000
        },
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(carousel模式)。
        slidesPerGroup: 4, // 在carousel mode下定义slides的数量多少为一组。
        breakpoints: {
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
          }
        }
      }
    }
  },
  props: {
    card: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    addtoCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty })
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  computed: {
    filterData () {
      const vm = this
      // console.log(vm.card.category)
      if (!vm.card.category) {
        return vm.products
      } else {
        return vm.products.filter((item) => {
          return item.category === vm.card.category
        })
      }
    },
    ...mapGetters(['isLoading', 'status']),
    ...mapGetters('productsModules', ['categories', 'products'])
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
  min-height: 380px;
}
</style>
