<template>
  <el-button v-bind="$attrs">{{title}}</el-button>
</template>

<script>
export default {
  name: "elspButton",
  props: {
    title: String
  }
};
</script>

<style></style>
