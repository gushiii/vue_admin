import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
import { Row, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

// 全局注入 ElementUI
// Vue.use(ElementUI);

// 按需引入 ElementUI
Vue.use(Row);
Vue.use(Button);


new Vue({
  // 将 router 挂载到根节点
  router,
  render: h => h(App),
}).$mount('#app')
