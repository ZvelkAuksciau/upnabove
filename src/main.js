import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import * as VueGoogleMaps from 'vue2-google-maps'

export default function(Vue, { head, appOptions }) {
  Vue.component("Layout", DefaultLayout);

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA7h3Xc9DVypXH_fd9UscDTjB7yTFJJqqc'
    }
  })
}
