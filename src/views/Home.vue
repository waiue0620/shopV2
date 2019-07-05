<template>
  <div class="home">
    <Navber></Navber>
    <Alert></Alert>
    <TopSwiper></TopSwiper>
    <router-view></router-view>
    <footer class="footer mt-3">
      <p class="text-center m-0">資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </footer>
  </div>
</template>

<script>
import Navber from '@/components/Navber'
import TopSwiper from '@/components/TopSwiper'
import Alert from '@/components/AlertMessage'

export default {
  name: 'home',
  components: {
    Navber,
    TopSwiper,
    Alert
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
</style>
