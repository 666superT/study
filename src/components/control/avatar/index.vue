<template>
  <div>
    <el-avatar :src='data[prop]' v-bind='config'></el-avatar>
  </div>
</template>

<script>
import { props } from '../basis'

export default {
  name: 'avatarComponent',
  props: {
    ...props
  }
}
</script>

<style scoped>

</style>
