<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView/IndexView.vue'
import SalesView from '../components/SalesView/IndexView.vue'
import BottomView from '../components/BottomView/IndexView.vue'
import MapView from '../components/MapView/IndexView.vue'

export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
