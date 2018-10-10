import Vue from 'vue';
import VueResource from 'vue-resource';
import app from './app.vue';
import router from './router';


Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(app),
}).$mount('#app');
