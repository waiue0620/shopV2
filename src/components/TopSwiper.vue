<template>
  <div>
    <div class="container">
      <swiper :options="swiperOption">
        <swiper-slide class="" v-for="(item, index) in sliderImg" :key="index">
          <div class="bg-swiper swiper-container" :style="`backgroundImage: url('${item.imgPath}');`"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 30, // 在slide之间设置距离（单位px）。
        centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
        grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
        },
        autoplay: {
          delay: 10000
        }
      },
      sliderImg: [
        {
          imgPath: 'img/nathan-fertig-249917-unsplash.jpg'
        },
        {
          imgPath: 'img/wes-hicks-1103983-unsplash.jpg'
        },
        {
          imgPath: 'img/michael-browning-246513-unsplash.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-swiper {
  background-size: cover;
  background-position: center 60% ;
}
.swiper-container {
  height: 400px;
}
.container {
  padding-top: 66px;
}
</style>
