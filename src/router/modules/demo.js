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
    }
  ]
};
