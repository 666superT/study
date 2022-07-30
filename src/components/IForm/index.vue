<template>
  <div>
    <el-form ref="form" :model="field" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item v-bind="item" :key="item.prop">
          <component
            :value.sync="field[item.prop]"
            :config="item"
            :is="!item.type ? 'com-text' : `com-${item.type}`"
          ></component>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button
          v-for="item in button"
          @click="handleButtonEven(item)"
          :key="item.method"
          v-bind="item"
        >
          {{ item.text }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRules from './createRules'
const modules = {}
const files = require.context('../control', true, /index.vue$/i)
files.keys().forEach((item) => {
  const key = item.split('/')
  const name = key[1]
  modules[`com-${name}`] = files(item).default
})
export default {
  name: 'IForm',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    button: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    beforeSubmit: Function
  },
  components: {
    ...modules
  },
  data() {
    return {
      formItem: ''
    }
  },
  methods: {
    // 表单按钮事件
    handleButtonEven(item) {
      switch (item.method) {
        case 'submit':
          this.handleSubmit(item)
          break
        case 'reset':
          this.handleReset(item)
          break
      }
    },
    // 提交
    handleSubmit(item) {
      this.$refs.form.validate((valid) => {
        // console.log(valid)
        if (valid) {
          item.loading = true
          if (typeof this.beforeSubmit === 'function') {
            this.beforeSubmit()
              .then(() => {
                this.$message.success('提交成功')
                item.loading = false
              })
              .catch(() => {
                this.$message.error('提交失败')
                item.loading = false
              })
          }
        } else {
          this.$message.error('输入内容不完整')
        }
      })
    },
    // 重置
    handleReset(item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount() {
    this.formItem = createRules(this.item)
  }
}
</script>
