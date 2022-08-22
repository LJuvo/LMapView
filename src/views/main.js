import Vue from 'vue'
import App from './App.vue'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
import _ from 'lodash'
import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from 'leaflet'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

Vue.prototype.$axios = axios
Vue.prototype._ = _
Vue.config.productionTip = false
Vue.L = Vue.prototype.$L = L

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#lmapScreen')
