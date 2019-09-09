import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters' // 导入全局过滤器函数
import '@/assets/css/reset1.css'

// 声明全局过滤器
for (var i in filters) {
  Vue.filter(i, filters[i])
}

Vue.config.productionTip = false

import {
  Swipe,
  SwipeItem,
  Sticky,
  List,
  IndexBar,
  IndexAnchor,
  Cell,
  Popup,
  Tab,
  Tabs,
  Button,
  DropdownMenu,
  DropdownItem
} from 'vant';
Vue.use(DropdownMenu).use(DropdownItem).use(Swipe).use(SwipeItem).use(Sticky).use(List).use(IndexBar).use(IndexAnchor).use(Cell).use(Popup).use(Tab).use(Tabs).use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
