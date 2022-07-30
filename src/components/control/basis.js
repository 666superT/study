const props = {
  config: {
    type: Object,
    default: () => ({})
  },
  value: {
    type: [String, Array, Number, Boolean],
    default: ''
  }
}

const mixin = {
  data() {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.val = newVal
      },
      immediate: true
    }
  },
  methods: {
    handleChangeEvent() {
      this.$emit('update:value', this.val)
      const callback = this.config.callback
      if (
        callback &&
        Object.prototype.toString.call(callback) === '[object Function]'
      ) {
        callback(this.val)
      }
    }
  }
}

export { props, mixin }
