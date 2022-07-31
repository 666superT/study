const props = {
  config: {
    type: Object,
    default: () => ({})
  },
  value: {
    type: [String, Array, Number, Boolean],
    default: ''
  },
  // column每一项配置
  // 该列字段
  prop: {
    type: String,
    default: ''
  },
  // 请求来的渲染数据
  data: {
    type: Object,
    default: () => ({})
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
