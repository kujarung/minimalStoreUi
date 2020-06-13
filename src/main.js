import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './assets/styles/main.scss';
import Kakao from "@/config/kakao.min";
Vue.config.productionTip = false
Vue.use(router);
Vue.use(store);
Kakao.init('8a038013f4764ac6f534e6ad557d1edf');
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
