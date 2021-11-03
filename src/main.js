import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Navegacion/Home.vue'
import Multiplicar from './components/Navegacion/Multiplicar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:"/home", component: Home},
  {path:"/multiplicar", component: Multiplicar},
  {path:"/", component: Home}
];

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
