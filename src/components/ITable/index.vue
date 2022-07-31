<template>
  <div>
    <el-table :data='tableData' style='width: 100%'>
      <el-table-column v-if='index' label='序号' type='index' />
      <el-table-column v-if='selection' type='selection' />
      <el-table-column
        v-for='item in tableColumn'
        :key='item.prop'
        v-bind='item'
      >
        <template v-slot='scope'>
          <slot v-if="item.type==='slot'" :data='scope.row' :name='item.slotName'></slot>
          <component :is="!item.type?'com-text':`com-${item.type}`" v-else :config='item' :data='scope.row'
                     :prop='item.prop'></component>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const modules = {}
const files = require.context('../control', true, /index.vue$/i)
files.keys().forEach(item => {
  const key = item.split('/')
  const name = key[1]
  modules[`com-${name}`] = files(item).default
})
console.log(modules)
export default {
  name: 'ITable',
  components: {
    ...modules
  },
  props: {
    index: Boolean,
    selection: Boolean,
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumn: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped></style>
