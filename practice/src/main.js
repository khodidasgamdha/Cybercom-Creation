import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Form from './components/Form'

Vue.use(VueRouter);
const routes = [
  { path: '/practice', component: HelloWorld },
  { path: '/form', component: Form }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
