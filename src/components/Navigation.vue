<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <router-link to="/">
      <a class="navbar-brand" href="#">Navbar</a>
    </router-link>

    <ul class="navbar-nav pull-right">
      <li class="nav-item">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/table">
          Table
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  .router-link-exact-active{
    color: #72728f;
  }
  .nav-item{
    padding: 10px;
  }
</style>
