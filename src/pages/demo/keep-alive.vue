<template>
  <div class="q-pa-md">
    <q-input v-model="input" label="name" style="width: 300px" dense outlined />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-keep-alive',

  setup() {
    const input = ref('');

    return {
      input
    };
  }
});
</script>
