import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Multiplicar from './components/Multiplicar.vue'
import Deportes from './components/Deportes.vue';
import NumerosPadre from './components/NumerosPadre.vue';
import ComicPadre from './components/ComicPadre.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import NumeroTriple from './components/NumeroTriple.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:"/home", component: Home},
  {path:"/numerodoble/:numero?", component: NumeroDoble},
  {path:"/numerotriple/:numero?", component: NumeroTriple},
  {path:"/multiplicar", component: Multiplicar},
  {path:"/deportes", component: Deportes},
  {path:"/numerospadre", component: NumerosPadre},
  {path:"/comic", component: ComicPadre},
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
