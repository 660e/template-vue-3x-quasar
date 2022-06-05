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
    }
  ]
};
