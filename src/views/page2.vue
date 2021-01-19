<template>
  <div>
    page2的值是:{{ name }}
    <p @click="changeName">dfasdasd</p>
    {{changeData1}}
  </div>
</template>

<script>
import { toRefs, ref, onRenderTracked, toRaw, reactive } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const data1 = reactive({
      name: "tmc",
      age: 25,
    });
    const data2 = ref(666);

    const changeData1 = toRaw(data1.name);
    const changeData2 = toRaw(data2.value);

    onRenderTracked((e) => {
      console.log(e);
      console.log("状态跟踪");
    });
    function changeName() {
      data1.name = "99999";
      console.log("dadada", changeData1);
    }
    return {
      ...toRefs(data1),
      ...toRefs(data2),
      changeName,
      changeData1
    };
  },
};
</script>

<style scoped></style>
