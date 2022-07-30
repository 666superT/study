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
        <el-button>按钮</el-button>
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
    field: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ...modules
  },
  data() {
    return {
      formItem: ''
    }
  },
  beforeMount() {
    this.formItem = createRules(this.item)
  }
}
</script>
