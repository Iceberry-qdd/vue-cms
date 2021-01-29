import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../views/tabbar_home.vue'
import CartContainer from '../views/tabbar_cart.vue'
import SearchContainer from '../views/tabbar_search.vue'
import VipContainer from '../views/tabbar_vip.vue'
import NewsList from '../views/news_newsList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/home' },
  { path: '/home', name: 'Home', component: HomeContainer },
  { path: '/vip', name: 'Vip', component: VipContainer },
  { path: '/cart', name: 'Cart', component: CartContainer },
  { path: '/search', name: 'Search', component: SearchContainer },
  { path: '/home/newslist', name: 'NewsList', component: NewsList }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
