<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div class="container">
        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="logo mb-0 mx-auto">
          <a href="#/index" class="text-hide">logo</a>
        </h1>
        <router-link class="px-2 d-s-none d-block order-lg-1 position-relative" to="/customer"><i class="fas fa-shopping-cart"></i>
          <span class="badge badge-pill badge-danger">
            {{ cart.carts.length }}
          </span>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item px-3">
              <router-link class="nav-link" to="/index">首頁</router-link>
            </li>
            <li class="nav-item px-3">
              <router-link class="nav-link" to="/shopping">商品列表</router-link>
            </li>
            <li class="nav-item mr-auto mb-0 d-none d-s-block">
              <router-link class="nav-link" to="/customer"><i class="fas fa-shopping-cart"></i></router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    signout () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      this.$http.post(url).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/signin')
        }
      })
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped lang="scss">
  .logo {
    a {
      display: block;
      background: url(../../public/img/logo.png) no-repeat 50% 50%;
      width: 219px;
      height: 50px;
    }
  }
  .fa-shopping-cart{
    font-size: 24px;
    color: #000;
  }
  .navbar-nav {
    font-weight: bold;
    font-family: Noto Sans TC,sans-serif!important;
  }
  .nav-link {
    position: relative;
    &:after {
      content: "";
      width: 0;
      height: 2px;
      background: #3f5d45;
      position: absolute;
      bottom: 0px;
      left: 50%;
      -webkit-transition: all .5s;
      transition: all .5s;
    }
    &:hover::after,&.active:after {
      left: 0;
      width: 100%;
    }
  }
  .badge {
    position: absolute;
    top: -8px;
    right: -3px;
  }
</style>
