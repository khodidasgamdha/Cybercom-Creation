import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAGjROtLirE7imJexGMvxVKA6rEYrMMB0g",
    libraries: "places"
  }
});
