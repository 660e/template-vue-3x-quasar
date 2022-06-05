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
      path: 'echarts',
      name: 'demo-echarts',
      component: () => import('pages/demo/echarts.vue')
    }
  ]
};
