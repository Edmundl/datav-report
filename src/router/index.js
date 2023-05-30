import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BMapView from '../components/BMapScatter/BMapView.vue'
import BMap2Mode from '../components/BMapScatter/BMap2View.vue'
import WordCloud from '../views/WordCloudView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMapView
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: BMap2Mode
  },
  {
    path: '/wordCloud',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  routes
})

export default router
