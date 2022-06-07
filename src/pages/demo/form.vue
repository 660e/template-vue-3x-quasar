<template>
  <div class="q-pa-md q-gutter-x-md row">
    <div style="width: 300px">
      <q-input v-model="internal.name" :rules="[rules.required]" label="name" dense outlined />
    </div>
    <div style="width: 300px">
      <q-input v-model="external.name" label="name" dense outlined />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-form',

  setup() {
    const internal = ref({
      name: ''
    });
    const rules = ref({
      required: v => !!v || 'required'
    });

    const external = ref({
      name: ''
    });

    return {
      internal,
      rules,
      external
    };
  }
});
</script>
