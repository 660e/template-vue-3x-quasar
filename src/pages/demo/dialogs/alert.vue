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

    const show = params => {
      dialog.value = true;
      input.value = params.a;
    };

    const confirm = () => {
      emit('confirm', { b: input.value });
    };

    expose({
      show
    });

    return {
      dialog,
      input,
      show,
      confirm
    };
  }
});
</script>
