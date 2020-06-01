import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './assets/styles/main.scss';

Vue.config.productionTip = false
Vue.use(router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
