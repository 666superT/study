<template>
  <div>
    <el-switch
      v-model='val'
      v-bind='config'
      @change='handleChangeEvent'
    ></el-switch>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'switchComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
