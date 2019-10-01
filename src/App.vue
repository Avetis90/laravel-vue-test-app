<template>
  <div id="app">
    <navigation></navigation>
    <div class="container-fluid pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HelloWorld from "./components/Home";
  import PropertiesTable from "./components/PropertiesTable";
  import Navigation from "./components/Navigation";

  export default {
    name: 'App',
    components: {Navigation, HelloWorld, PropertiesTable}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
