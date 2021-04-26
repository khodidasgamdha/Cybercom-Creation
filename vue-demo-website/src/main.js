import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify';
import Home from "./components/Home";
import contactUs from "./components/contact-us";
import FormData from "./components/form-data";
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import User from "./components/user";
import Profile from "./components/profile";
import Setting from "./components/setting";

Vue.use(VueRouter);
const routes = [
    { path: "/", component: Home },
    { path: "/contact-us", component: contactUs },
    { path: "/form-data", component: FormData },
    { path: "/user", component: User, 
    children: [
      { path: 'profile', component: Profile },
      { path: 'setting', component: Setting }
    ] },
    { path: "/blog", component: Blog },
    { path: "/blog/:id", name: 'blog', component: BlogDetails },
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
