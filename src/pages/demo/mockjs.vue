<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-btn @click="mock" label="mock" />
    <pre>{{ pre }}</pre>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import mockjs from 'mockjs';

export default defineComponent({
  name: 'demo-mockjs',

  setup() {
    const pre = ref({});
    const mock = () => {
      pre.value = mockjs.mock({
        'A|1-100': 1,
        'B|1-100.1-2': 1,
        'C|1': true,
        'D|2': [{ a: 1, b: 2 }],
        'E': '@string',
        'F': '@date',
        'G': '@time',
        'H': '@title',
        'I': '@name',
        'J': '@domain',
        'K': '@email',
        'L': '@ip',
        'M': '@guid',
        'N': '@ctitle',
        'O': '@csentence',
        'P': '@region',
        'Q': '@province',
        'R': '@city'
      });
    };

    return {
      pre,
      mock
    };
  }
});
</script>
