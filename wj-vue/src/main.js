// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 因为使用了新的模块 axios，所以需要进入到项目文件夹中，执行 npm install --save axios，以安装这个模块。
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
// 作用是阻止vue 在启动时生成生产提示
Vue.config.productionTip = false

// 完整引入ElementUI
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

// 创建了一个 Vue 对象（实例）
/* eslint-disable no-new */
new Vue({
  el: '#app', // 提供一个在页面上已存在的 DOM 元素作为 Vue 对象的挂载目标
  render: h => h(App),
  router, // 该对象包含 Vue Router，并使用项目中定义的路由
  store,
  components: { App },
  template: '<App/>' // template 是用一个字符串模板作为 Vue 实例的标识使用，类似于定义一个 html 标签。
})
