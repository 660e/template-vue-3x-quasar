import { boot } from 'quasar/wrappers';
import * as filters from 'src/filters';

export default boot(({ app }) => {
  app.config.globalProperties.$filters = filters;
});
