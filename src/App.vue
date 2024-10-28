<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Corporations />
</template>

<script>
import Corporations from './components/CorporationsList.vue';

export default {
  name: 'App',
  components: {
    Corporations
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
