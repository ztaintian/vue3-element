<template>
  <div class="ys-verification">
    <div class="content">
      <input
        type="tel"
        @click="inputLast"
        id="textarea-1"
        maxlength="4"
        autocomplete="off"
        @input="numberChange"
        v-model="inputValue"
        class="input"
      />
      <span
        class="span"
        :style="'left:' + index * 50 + 'px'"
        v-for="(item, index) in arrNumber"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
// 完整组件 直接用
export default {
  name: "VerificationCodeInput",
  props: {
    amount: {
      type: Number,
      default: 4,
    },
  },
  setup(props, { emit }) {
    // data
    let data = reactive({
      inputValue: "",
      arrNumber: [],
    });
    // onMounted
    onMounted(() => {
      data.arrNumber = new Array(props.amount).fill("");
    });
    // methods
    const numberChange = () => {
      data.arrNumber = new Array(props.amount).fill("");
      data.inputValue = data.inputValue.slice(0, 4);
      data.inputValue = validateNumber(data.inputValue);
      data.inputValue.split("").map((item, index) => {
        data.arrNumber[index] = item;
      });
      emit("onCompleted", data.arrNumber.join(""));
    };
    const validateNumber = (val) => {
      return val.replace(/\D/g, "");
    };
    const setSelectionRange = (input, selectionStart, selectionEnd) => {
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
      } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd("character", selectionEnd);
        range.moveStart("character", selectionStart);
        range.select();
      }
    };
    // 初始化
    const setCss = () => {
      var sr = document.getElementById("textarea-1");
      var len = sr.value.length;
      setSelectionRange(sr, len, len); //将光标定位到文本最后
    };
    const inputLast = () => {
      setCss();
    };
    return {
      ...toRefs(data),
      inputLast,
      numberChange,
    };
  },
};
</script>

<style lang="stylus">
.ys-verification {
  display: flex;
  align-items center
  .content {
    height: 40px;
    min-width: 200px;
    position: relative;
    margin: 0 0 0  20px;
    .input {
      width: 180px;
      opacity: 0;
      position: absolute;
      height: 40px;
      z-index: 999;
      letter-spacing: 43px;
      left: 0px;
    }

    .span {
      font-size: 18px;
      display: inline-block;
      width: 30px;
      position: absolute;
      text-align: center;
      border-bottom: 1px solid #000;
      height: 40px;
      line-height: 40px;
      margin-right: 20px;
    }
  }

  width: 100%;
  display: flex;
  justify-content: space-around;

  .input-wrapper {
    border-bottom: 1px solid #d6d6d6;
    width: 15%;
    height: 0;
    padding-bottom: 20%;
    position: relative;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 0.3s;
      font-size: 7vw;
      color: #333333;
    }
  }

  input:focus {
    border-bottom: 1px solid #666666;
  }
}
</style>
