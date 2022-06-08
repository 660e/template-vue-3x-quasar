<template>
  <div class="q-pa-md">
    <div id="demo" style="height: 400px; width: 400px"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import * as echarts from 'echarts';

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{c}'
  },
  legend: {
    orient: 'vertical',
    top: 0,
    left: 0,
    data: ['A', 'B', 'C', 'D', 'E']
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '24'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 784, name: 'E' }
      ]
    }
  ]
};

export default defineComponent({
  name: 'demo-echarts',

  setup() {
    onMounted(() => {
      echarts.init(document.querySelector('#demo')).setOption(option);
    });
  }
});
</script>
