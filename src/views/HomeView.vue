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
import { wordcloud, screenData, mapScatter } from '../api'

export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    // 解决在透传数据时，获取不到问题
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordCloud
    },
    getMapData () {
      return this.mapData
    }
  },
  // 向子组件透传数据；避免了一层一层的传递数据
  provide () {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted () {
    screenData().then(data => { this.reportData = data })
    wordcloud().then(data => { this.wordCloud = data })
    mapScatter().then(data => { this.mapData = data })
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
