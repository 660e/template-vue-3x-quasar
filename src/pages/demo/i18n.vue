<template>
  <div class="q-pa-md">
    <div class="q-gutter-x-md">
      <q-btn @click="language('en-US')" label="English" />
      <q-btn @click="language('zh-CN')" label="中文" />
    </div>
    <div class="q-pt-md q-gutter-x-md">
      <span v-text="$t('test')"></span>
      <span>{{ $t('test') }}</span>
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'demo-i18n',

  setup() {
    const { locale, t } = useI18n({ useScope: 'global' });
    const content = t('test');
    const language = lang => {
      locale.value = lang;
    };

    return {
      locale,
      content,
      language
    };
  }
});
</script>
