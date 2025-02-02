import { defineBoot } from '#q-app/wrappers'
import helpers from "src/plugins/helpers";
import loadStore from "stores/loader";
import plugins from "src/plugins";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default defineBoot(async ({ app, router }) => {
  app.config.globalProperties = {
    ...app.config.globalProperties,
    $h: helpers,
    $helper: helpers,
    $store: loadStore,
    $plugins: plugins,
  };
});
