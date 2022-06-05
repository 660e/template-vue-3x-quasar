<template>
  <div class="q-pa-md q-gutter-x-md">
    <q-btn @click="alert.show({ a: 1 })" label="alert" />
    <!-- alert -->
    <alert-dialog ref="alert" @confirm="confirm" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AlertDialog from './dialogs/alert.vue';

export default defineComponent({
  name: 'demo-dialog',

  components: {
    AlertDialog
  },

  setup() {
    const alert = ref(null);

    const confirm = resolve => {
      console.log(alert.value);
      console.log(resolve);
    };

    return {
      alert,
      confirm
    };
  }
});
</script>
