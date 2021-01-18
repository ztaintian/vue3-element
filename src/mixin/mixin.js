//抛出混入对象，方便外部访问
 const mixin = {
  data() {
    return {
      number: 1
    }
  },
  watch : {
    number() {
      console.log(22222,this.number)
      // this.aa()
    }
  },
  mounted() {
    console.log('minxin111')
    // this.aa()
  }
}
export default mixin;