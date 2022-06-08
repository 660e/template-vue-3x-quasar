<template>
  <div class="q-pa-md q-gutter-y-md">
    <q-btn @click="toggle = !toggle" label="transition" />
    <transition name="demo" mode="out-in">
      <div v-if="toggle" class="bg-grey-3 flex flex-center" style="height: 200px; width: 200px">{{ toggle }}</div>
      <div v-else class="bg-grey-3 flex flex-center" style="height: 200px; width: 200px">{{ toggle }}</div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'demo-transition',

  setup() {
    const toggle = ref(true);

    return {
      toggle
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-enter-active {
  transition: opacity 0.5s, margin-left 0.5s;
}
.demo-enter-from {
  margin-left: -20px;
  opacity: 0;
}
.demo-enter-to {
  margin-right: 0;
  opacity: 1;
}
.demo-leave-active {
  transition: opacity 0.5s, margin-left 0.5s;
}
.demo-leave-from {
  margin-left: 0;
  opacity: 1;
}
.demo-leave-to {
  margin-left: 20px;
  opacity: 0;
}
</style>
