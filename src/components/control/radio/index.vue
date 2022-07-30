<template>
  <div>
    <el-radio-group v-model="val" @change="handleChangeEvent">
      <el-radio v-for="item in config.radio" :key="item.label" v-bind="item">{{
        item.text
      }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'checkboxComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
