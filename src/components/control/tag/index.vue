<template>
  <div>
    <el-tag v-bind="config.callback(data[prop])">{{ config.callback(data[prop]).title }}</el-tag>
  </div>
</template>

<script>
import { props } from '../basis'
export default {
  name: 'tagComponent',
  props: {
    ...props
  }
}
</script>

<style scoped></style>
