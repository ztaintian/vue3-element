<template>
  <div>
    <div>{{ girl }}</div>
    <div>{{ boy }}</div>
    <button @click="changeGirls">改变我的女孩</button>
    <upload></upload>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref } from "vue";
import dayjs from 'dayjs'
import upload from "/@/components/upload/index.vue";
export default {
  components: {
    upload
  },
  name: "App",
  setup() {
    console.log(dayjs().format('YYYY-MM-DD'))
    const boy = ref("我是男孩");
    const data = reactive({
      girl: "女孩",
      changeGirls: () => {
        data.girl = "男孩";
        boy.value = data.girl;
      },
    });
    watch(
      () => data.girl,
      (newvalue, oldvalue) => {
        console.log(newvalue);
        console.log(oldvalue);
      }
    );
    return {
      ...toRefs(data),
      boy,
    };
  },
};
</script>
