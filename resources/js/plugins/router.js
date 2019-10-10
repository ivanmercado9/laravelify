import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Polizas from '../views/Polizas.vue';

Vue.use(VueRouter)


let routes = [
    {path: '/home', component: Home},
    {path: '/polizas', component: Polizas},
    // {path: '*', component: NotFoundView}
];

export default  new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});