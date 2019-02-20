import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import * as VueGoogleMaps from "../node_modules/vue2-google-maps/src/main.js";
import axios from "axios";
import VeeValidate from "vee-validate";

export default function(Vue, { head, appOptions }) {
  Vue.component("Layout", DefaultLayout);

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Montserrat"
  });

  Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyA7h3Xc9DVypXH_fd9UscDTjB7yTFJJqqc"
    }
  });

  Vue.prototype.$axios = axios;

  Vue.use(VeeValidate, {
    classes: true
  });
}
