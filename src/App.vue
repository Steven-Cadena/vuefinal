<template>
  <div id="app">
    <Menu/>
    <NumerosAleatorios/>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import NumerosAleatorios from './components/NumerosAleatorios.vue';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'App',
  components: {
    Menu,
    NumerosAleatorios,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
