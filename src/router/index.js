import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';

import demo from './modules/demo.js';

export const routes = [
  {
    path: '/',
    component: () => import('layouts')
  },
  demo,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404.vue')
  }
];

export default route(() => {
  let createHistory = null;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE),
    routes
  });

  return Router;
});
