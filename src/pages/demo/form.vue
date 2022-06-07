<template>
  <div class="q-pa-md q-gutter-x-md row">
    <div style="width: 300px">
      <div class="q-pb-sm">Internal</div>
      <q-input v-model="internal.name" :rules="[internalRules.required]" label="name" dense outlined />
    </div>
    <div style="width: 300px">
      <div class="q-pb-sm">External</div>
      <q-input
        v-model="external.name"
        @blur="v$.name.$touch"
        :error="v$.name.$error"
        :error-message="v$.name.required.$message"
        label="name"
        dense
        outlined
      />
    </div>
    <pre>{{ v$.name }}</pre>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default defineComponent({
  name: 'demo-form',

  setup() {
    const internal = ref({
      name: ''
    });
    const internalRules = {
      required: v => !!v || 'Value is required'
    };

    const external = ref({
      name: ''
    });
    const externalRules = {
      name: { required }
    };
    const v$ = useVuelidate(externalRules, external);

    return {
      internal,
      internalRules,
      external,
      v$
    };
  }
});
</script>
