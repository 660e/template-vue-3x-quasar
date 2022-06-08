<template>
  <q-dialog v-model="dialog">
    <q-card style="width: 300px">
      <q-card-section class="q-gutter-y-md">
        <q-input v-model="input" dense outlined />
        <q-btn @click="confirm" label="confirm" v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-dialog-alert',
  emits: ['confirm'],

  setup(props, { emit, expose }) {
    const dialog = ref(false);
    const input = ref('');

    const confirm = () => emit('confirm', { b: input.value });

    const show = params => {
      dialog.value = true;
      input.value = params.a;
    };

    expose({
      show
    });

    return {
      dialog,
      input,
      confirm
    };
  }
});
</script>
