import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Form from "./components/Form";
import PostList from "./components/PostList";
import Home from "./components/Home";

Vue.use(VueRouter);
const routes = [
    { path: "/home", component: Home },
    { path: "/practice", component: HelloWorld },
    { path: "/form", component: Form },
    { path: "/post", component: PostList },
];
const router = new VueRouter({
    routes,
});

Vue.config.productionTip = false;

new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");
