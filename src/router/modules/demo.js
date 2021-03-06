export default {
  path: '/demo',
  component: () => import('layouts'),
  children: [
    {
      path: 'axios',
      name: 'demo-axios',
      component: () => import('pages/demo/axios.vue')
    },
    {
      path: 'dialog',
      name: 'demo-dialog',
      component: () => import('pages/demo/dialog.vue')
    },
    {
      path: 'echarts',
      name: 'demo-echarts',
      component: () => import('pages/demo/echarts.vue')
    },
    {
      path: 'filters',
      name: 'demo-filters',
      component: () => import('pages/demo/filters.vue')
    },
    {
      path: 'form',
      name: 'demo-form',
      component: () => import('pages/demo/form.vue')
    },
    {
      path: 'i18n',
      name: 'demo-i18n',
      component: () => import('pages/demo/i18n.vue')
    },
    {
      path: 'keep-alive',
      name: 'demo-keep-alive',
      meta: {
        keepAlive: true
      },
      component: () => import('pages/demo/keep-alive.vue')
    },
    {
      path: 'mockjs',
      name: 'demo-mockjs',
      component: () => import('pages/demo/mockjs.vue')
    },
    {
      path: 'router-view',
      name: 'demo-router-view',
      component: () => import('pages/demo/router-view.vue'),
      children: [
        {
          path: 'details',
          name: 'demo-router-view-details',
          component: () => import('pages/demo/pages/details.vue')
        }
      ]
    },
    {
      path: 'transition',
      name: 'demo-transition',
      component: () => import('pages/demo/transition.vue')
    }
  ]
};
