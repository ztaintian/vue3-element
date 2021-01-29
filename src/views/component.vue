<template>
  <div>
    <verification-code @onCompleted="onCompleted"></verification-code>
    <drop-down style="margin-top:30px;"></drop-down>
  </div>
</template>

<script>
import VerificationCode from "/@/components/VerificationCode/index.vue";
import DropDown from "/@/components/DropDown/index.vue";
export default {
  components: {
    VerificationCode,
    DropDown,
  },
  setup() {
    // 校验码
    const onCompleted = (value) => {
      console.log(value);
    };
    return {
      onCompleted,
    };
  },
};
</script>

<style></style>
