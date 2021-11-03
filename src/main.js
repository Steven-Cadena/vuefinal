import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Multiplicar from './components/Multiplicar.vue'
import Deportes from './components/Deportes.vue';
import NumerosPadre from './components/NumerosPadre.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:"/home", component: Home},
  {path:"/multiplicar", component: Multiplicar},
  {path:"/deportes", component: Deportes},
  {path:"/numerospadre", component: NumerosPadre},
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
