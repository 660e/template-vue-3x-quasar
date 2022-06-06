<template>
  <div class="q-pa-md">
    <div>{{ n }} -> {{ $filters.toLocaleString(n) }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-filters',

  setup() {
    const n = ref(1234567890);

    return {
      n
    };
  }
});
</script>
