<template>
  <div class="q-pa-md">
    <pre>{{ pre }}</pre>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { demoApi } from '@/api/demo.js';

export default defineComponent({
  name: 'demo-axios',

  setup() {
    const pre = ref({});

    onMounted(() => {
      demoApi.randomuser().then(response => (pre.value = response.data.results));
    });

    return {
      pre
    };
  }
});
</script>
