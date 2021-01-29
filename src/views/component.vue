<template>
  <div>
    <verification-code @onCompleted="onCompleted"></verification-code>
  </div>
</template>

<script>
import VerificationCode from "/@/components/VerificationCode/index.vue";
export default {
  components: {
    VerificationCode,
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
