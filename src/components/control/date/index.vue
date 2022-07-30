<template>
  <div>
    <el-date-picker
      v-model="val"
      @change="handleChangeEvent"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'DateComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
