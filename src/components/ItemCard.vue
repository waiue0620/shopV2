<template>
  <div>
    <div class="itemCard">
      <a class="itemCard-img" href="#" :style="`background-image: url('${cardData.imageUrl}')`" @click.prevent="productInfo"></a>
      <div class="itemCard-body">
        <h3>{{cardData.title}}</h3>
        <p>{{cardData.description}}</p>
      </div>
      <div class="itemCard-price">
        <span>原價 {{cardData.origin_price | currency}}</span>
        <h4 class="text-danger">售價 {{cardData.price | currency}}</h4>
      </div>
      <div class="itemCard-footer">
        <div class="row no-gutters">
          <div class="col-6">
            <button class="btn btn-block" @click.prevent="productInfo" :disabled="loadingStatus.loadingItem != '' ">
              <i class="fas fa-spinner fa-spin mr-1" v-if="loadingStatus.loadingItem === cardData.id"></i>
              <i class="fas fa-search mr-1" v-else></i>詳細介紹
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-block" @click.prevent="addtoCart" :disabled="loadingStatus.loadingItem != '' ">
              <i class="fas fa-spinner fa-spin mr-1" v-if="loadingStatus.loadingItem === cardData.id"></i>
              <i class="fas fa-cart-plus mr-1" v-else></i>加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'itemCard',
  props: {
    cardData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    loadingStatus: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    addtoCart () {
      const vm = this
      vm.$emit('addtoCart', vm.cardData.id)
    },
    productInfo () {
      const vm = this
      vm.$router.push(`/detailed/${vm.cardData.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.itemCard {
  border:1px solid darken(#EAF0ED,10%);
  overflow: hidden;
}
.itemCard-img {
  background-position: center center;
  background-size: cover;
  height: 150px;
  display: block;
}
.itemCard-body,.itemCard-price {
  padding:10px 15px 10px 15px;
}
.itemCard-body {
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    min-height: 48px;
    margin: 0;
  }
}
.itemCard-price{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  span{
    font-size: 12px;
    font-style:italic;
    text-decoration:line-through;
  }
  h4{
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bolder;
  }
}
.itemCard-footer {
  .btn {
    background-color: #EAF0ED;
    color: #8DA291;
    border-radius: 0;
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
