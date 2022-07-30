<template>
  <div>
    <el-select
      v-model="val"
      :placeholder="config.placeholder"
      @change="handleChangeEvent"
    >
      <el-option
        v-for="item in config.option"
        :key="item.value"
        v-bind="item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'selectComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
