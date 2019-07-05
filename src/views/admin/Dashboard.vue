<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navber></Navber>
    <Alert></Alert>
    <div class="container-fluid">
      <Sidebar/>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Navber from '../../components/admin/Navber'
import Sidebar from '../../components/admin/Sidebar'
import Alert from '../../components/AlertMessage'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navber,
    Sidebar,
    Alert
  },
  computed: {
    ...mapGetters(['isLoading', 'status'])
  }
}
</script>
