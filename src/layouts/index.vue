<template>
  <q-layout view="lhh lpr lff">
    <q-header>
      <q-toolbar>
        <q-btn @click="expand" icon="menu" dense flat round />
        <q-toolbar-title></q-toolbar-title>
        <div class="q-gutter-x-xs">
          <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="expanded" bordered show-if-above>
      <div class="bg-grey-3 flex flex-center" style="height: 50px">
        <img src="~assets/logotype.svg" style="height: 40%" />
      </div>
      <q-list>
        <q-item v-for="l in links" :key="l.path" :to="{ name: l.name }" clickable v-ripple>
          <q-item-section class="text-subtitle1 text-right">{{ l.path }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page :style-fn="tweak">
        <q-scroll-area class="fit">
          <router-view v-slot="{ Component }">
            <transition>
              <keep-alive :include="include" :exclude="[]">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </q-scroll-area>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { routes } from '@/router';

export default defineComponent({
  name: 'app-layout',

  setup() {
    const expanded = ref(false);
    const expand = () => (expanded.value = !expanded.value);

    const links = routes.find(e => e.path === '/demo').children;

    const tweak = (offset, height) => ({ height: `${height - offset}px` });

    const include = links.filter(e => e.meta && e.meta.keepAlive).map(e => e.name);

    return {
      expanded,
      expand,
      links,
      tweak,
      include
    };
  }
});
</script>
