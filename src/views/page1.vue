<template>
  <div>page1的值是:{{ number }}</div>
</template>

<script>
import {mixin} from "../mixin/mixin"
export default {
  mixins: [mixin],
  data() {
    return {};
  },
  mounted() {
    console.log('minxin')
    this.number++
  }
};
</script>

<style scoped></style>
