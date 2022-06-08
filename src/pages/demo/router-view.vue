<template>
  <div v-if="route.name === 'demo-router-view'" class="q-pa-md q-gutter-y-md">
    <q-input v-model="input" label="name" style="width: 300px" dense outlined />
    <q-btn @click="router.push({ name: 'demo-router-view-details' })" label="details" />
  </div>
  <router-view v-else />
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'demo-router-view',

  setup() {
    const router = useRouter();
    const route = useRoute();

    const input = ref('');

    return {
      router,
      route,
      input
    };
  }
});
</script>
