import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import store from './store'
import Add from "./components/Add.vue"
import Auth from "./components/Auth.vue"
import Logout from "./components/Logout.vue"
import Check from "./components/Check.vue"
import Delete from "./components/Delete.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)


const routes = [
    {path: '/', component: Auth},
    {path: '/edit', component: Add},
    {path: '/logout', component: Logout},
    {path: '/:id', component: Check},
    {path: '/delete/:id', component: Delete}

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
    store
});
