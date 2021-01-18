<template>
  <div>
    {{ name }} {{ counter }}
    <p @click="changeName">改变</p>
    {{age}}
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
export default {
  props: {
    test: {
      type: Object,
      default: () => {
        return { name: "d" };
      },
    },
  },
  setup(props, context) {
    console.log("context", context);
    const counter = ref(0);
    console.log("props===>", props);
    var state = reactive({
      age:0
    })
    const { name } = toRefs(props.test);
    function changeName() {
      console.log(33131);
      counter.value++;
      name.value = 'dada'
      state.age++
    }
    return {
      ...toRefs(state),
      changeName,
      counter,
      name,
    };
  },
};
</script>

<style scoped></style>
