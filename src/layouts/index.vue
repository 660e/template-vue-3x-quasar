<template>
  <q-layout view="lhh lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn @click="expand" icon="menu" dense flat round />
        <q-toolbar-title>Quasar App</q-toolbar-title>
        <div>
          <q-btn icon="notifications" dense flat round />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="expanded" bordered show-if-above></q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'app-layout',

  setup() {
    const expanded = ref(false);

    return {
      expanded,
      expand() {
        expanded.value = !expanded.value;
      }
    };
  }
});
</script>
