import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/', 
      name: 'entries', 
      component: () => import("@/views/entries")
    },
    {
      path: '/entry/:id',
      name: 'entry',
      component: () => import("@/views/entry")
    }
  ],
});
