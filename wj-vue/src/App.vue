<template>
<!--  .vue 文件是一种自定义文件类型，在结构上类似 html，一个 .vue 文件即是一个 vue 组件。-->
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    路由视图，指的是当前路由（ URL）指向的内容将显示在这个容器中。-->
<!--    其它的组件即使拥有自己的路由，也只不过表面上是一个单独的页面，实际上只是在根组件 App.vue 中。-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
