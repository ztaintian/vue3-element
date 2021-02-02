<template>
  <div>
    <verification-code @onCompleted="onCompleted"></verification-code>
    <drop-down style="margin-top: 30px"></drop-down>
    <!--截图组件-->
    <screen-short
      v-if="screenshotStatus"
      @destroy-component="destroyComponent"
      @get-image-data="getImg"
    ></screen-short>
  </div>
</template>

<script>
import VerificationCode from "/@/components/VerificationCode/index.vue";
import DropDown from "/@/components/DropDown/index.vue";
import { ref } from "vue";
export default {
  components: {
    VerificationCode,
    DropDown,
  },
  setup() {
    const screenshotStatus = ref(true);
    const destroyComponent = function (status) {
      screenshotStatus.value = status;
    };
    // 获取裁剪区域图片信息
    const getImg = function (base64) {
      console.log("截图组件传递的图片信息", base64);
    };
    // 校验码
    const onCompleted = (value) => {
      console.log(value);
    };
    return {
      screenshotStatus,
      destroyComponent,
      getImg,
      onCompleted,
    };
  },
};
</script>

<style></style>
