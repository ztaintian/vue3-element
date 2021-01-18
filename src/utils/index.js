export default {
  cc() {
    console.log(111)
  },
  bb (fn) {
    fn(() => {
      this.cc()
    })
  }
}