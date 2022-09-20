<template>
  <nav>
    <router-link to="/">Home</router-link> |
<!--    <router-link to="/about">demo1</router-link>-->
    <router-link to="/demo01">demo1</router-link>|
    <router-link to="/demo02">demo2</router-link>|
    <router-link to="/demo03">demo3</router-link>|
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
