<template>
  <div class="q-pa-md">
    <q-btn @click="router.push({ name: 'demo-router-view' })" label="back" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'demo-router-view-details',

  setup() {
    const router = useRouter();

    return {
      router
    };
  }
});
</script>
