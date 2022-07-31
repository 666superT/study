<template>
  <div>
    <el-date-picker
      v-model='val'
      :end-placeholder="config.endPlaceholder || '结束日期'"
      :format="config.format || 'yyyy-MM-dd'"
      :placeholder="config.placeholder || '请选择日期'"
      :range-separator="config.rangeSeparator || '-'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :type="config.model || 'year'"
      :value-format="config.valueFormat || 'yyyy-MM-dd'"
      @change='handleChangeEvent'
    >
    </el-date-picker>
  </div>
</template>

<script>
import { mixin, props } from '../basis'

export default {
  name: 'DateComponent',
  props: {
    ...props
  },
  mixins: [mixin]
}
</script>
