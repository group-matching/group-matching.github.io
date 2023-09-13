import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

//ZIQUN WANG ADDED
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
