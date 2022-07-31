<template>
  <div>
    <el-checkbox-group v-model='val' @change='handleChangeEvent'>
      <el-checkbox
        v-for='item in config.checkbox'
        :key='item.value'
        v-bind='item'
      >{{ item.text }}
      </el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'checkboxComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
