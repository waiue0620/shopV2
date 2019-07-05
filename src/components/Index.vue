<template>
  <div>
    <div class="container">
      <div class="row justify-content-around px-5 mt-4">
        <div class="col-md-4 mb-3 mb-md-0" v-for="(item, index) in menuImg" :key="index">
          <router-link class="d-flex rounded typeBox justify-content-center align-items-center" :style="`backgroundImage: url('${item.imgPath}');`"  to="/shopping">{{ item.text }}</router-link>
        </div>
      </div>
      <section class="mt-4">
        <h5 class="text-f-bold text-center">佈置你的夢想客廳</h5>
        <div class="form-row mt-4">
          <div class="col-md-5">
            <div class="img-fluid bg-cover" style="backgroundImage: url(img/thanos-pal-1391996-unsplash.jpg); height:500px;"></div>
          </div>
          <div class="col-md-7">
            <div class="form-row h-100" >
              <div class="col-md-6 mb-2">
                <div class="img-fluid bg-cover h-100" style="backgroundImage: url(img/paige-cody-1276949-unsplash.jpg);"></div>
              </div>
              <div class="col-md-6 mb-2">
                <div class="img-fluid bg-cover h-100" style="backgroundImage: url(img/deborah-cortelazzi-615800-unsplash.jpg);"></div>
              </div>
              <div class="col-md-6">
                <div class="img-fluid bg-cover h-100" style="backgroundImage: url(img/patrick-perkins-340019-unsplash.jpg);"></div>
              </div>
              <div class="col-md-6">
                <div class="img-fluid bg-cover h-100" style="backgroundImage: url(img/roberto-nickson-772172-unsplash.jpg);"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h5 class="text-f-bold mt-3 text-center">本期熱銷商品</h5>
      <CardSwiper class="mt-4"></CardSwiper>
    </div>
  </div>
</template>

<script>
import CardSwiper from '@/components/CardSwiper'

export default {
  components: {
    CardSwiper
  },
  data () {
    return {
      menuImg: [
        {
          imgPath: 'img/bence-balla-schottner-1603447-unsplash.jpg',
          text: '沙發'
        },
        {
          imgPath: 'img/andrew-barrowman-1208968-unsplash.jpg',
          text: '椅子'
        },
        {
          imgPath: 'img/sarah-dorweiler-105892-unsplash.jpg',
          text: '床'
        }
      ]
    }
  }
}
</script>

<style>
.text-f-bold {
  font-weight: bold;
  font-family: Noto Sans TC,sans-serif!important;
}
.typeBox {
  background-size: cover;
  background-position: center bottom;
  height: 200px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 10px;
}
.typeBox:hover {
  transform: scale(1.05);
  color: #fff;
  text-decoration:none;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
}
</style>
