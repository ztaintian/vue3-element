<template>
  <div id="app">
    <button class="page1" @click="method1">page1</button>
    <button @click="method2">page2</button>
    <button @click="method3">component</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    method1() {
      this.$router.push("/page1");
    },
    method2() {
      this.$router.push("/page2");
    },
    method3() {
      this.$router.push("/component");
    },
  },
};
</script>

<style lang="stylus">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .page1 {
    color red
  }
}
</style>
