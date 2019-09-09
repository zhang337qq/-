import Vue from 'vue'
import Router from 'vue-router'
import FilmIndex from '@/views/film/Index'
import NowPlaying from '@/views/film/NowPlaying'
import ComingSoon from '@/views/film/ComingSoon'
import FilmDetail from '@/views/film/Detail'
import FilmCinemasIndex from '@/views/film/cinemas/Index'
import City from '@/views/city/Index'
import store from './store'
// 电影院详情
import CinemasIndex from '@/views/cinemas/Index'
// 个人中心
import CenterIndex from '@/views/center/Index'
// 登录界面
import Login from '@/views/user/Login'
// 影院播放列表详情
import CinemasDetail from '@/views/cinemas/CinemasDetail'
// 选座页面
import ChooseSeat from '@/views/cinemas/ChooseSeat'
// 搜索页面
import Search from '@/views/cinemas/Search'
// 影院详情轮播图页面
import DetailBanner from '@/views/cinemas/components/DetailBanner'
// 影院详情时间
import DetailDate from '@/views/cinemas/components/DetailDate'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    // 根路径的重定向
    path: '/',
    redirect: '/films'
  }, {
    // 电影页面的路径
    path: '/films',
    component: FilmIndex,
    children: [{
      // 正在热映
      path: '',
      redirect: '/films/nowPlaying'
    }, {
      // 正在热映
      path: 'nowPlaying',
      component: NowPlaying,
      meta: {
        hasFooterNav: true
      }
    }, {
      // 即将上映
      path: 'comingSoon',
      component: ComingSoon,
      meta: {
        hasFooterNav: true
      }
    }]
  }, {
    // 电影详情
    path: '/film/:id',
    component: FilmDetail,
    name: 'filmDetail'
  }, {
    // 电影详情 ----> 影院选择
    path: '/film/:id/cinemas',
    component: FilmCinemasIndex
  }, {
    // 城市定位
    path: '/City',
    component: City
  }, {
    // 影院页面的路径
    path: '/cinemas',
    component: CinemasIndex,
    meta: {
      hasFooterNav: true
    }
  }, {
    // 个人中心
    path: '/center',
    component: CenterIndex,
    meta: {
      hasFooterNav: true
    }
  }, {
    // 搜索页面
    path: '/search',
    component: Search
  }, {
    // 登录界面
    path: '/login',
    component: Login
  }, {
    // 影院播放列表详情
    path: '/cinemas/:cinemaId/',
    component: CinemasDetail,
    name: 'CinemasDetail',
    children: [{
      // 正在热映
      path: 'film/:filmId',
      component: DetailBanner,
      name: 'DetailBanner',
      children: [{
        path: ':showDate',
        component: DetailDate,
        name: 'DetailDate'
      }]
    }]
  }]
}, {
  // 选座页面
  path: '/schedule/:scheduleId',
  component: ChooseSeat,
  name: 'schedule'
})
let whiteList = ['/center', '/city']
let isLogin = ['/center', '/schedule/:scheduleId']
router.beforeEach((to, from, next) => {
  // 检测是否已定位到当前城市了
  if (whiteList.indexOf(to.path) === -1 && !store.state.cityId) {
    next('/city')
    return
  }
  if (isLogin.indexOf(to.path) !== -1 && !localStorage.getItem('zhangsan')) {
    next('/login')
    return
  }
  next()
})
export default router
