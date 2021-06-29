import Vue from 'vue';
import VueMask from 'v-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/global.scss';

Vue.config.productionTip = false;
Vue.use(VueMask);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
