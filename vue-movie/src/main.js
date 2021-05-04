import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import api from "./services/api";
import Carousel3d from "vue-carousel-3d";
import store from './store'

import "@/assets/css/styles.css";

Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Carousel3d);

new Vue({
    render: (h) => h(App),
    router: routes,
    store,
}).$mount("#app");
