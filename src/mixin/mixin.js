//抛出混入对象，方便外部访问
export const mixin = {
  data() {
    return {
      number: 1
    }
  },
  mounted() {
    console.log('minxin111')
  }
}