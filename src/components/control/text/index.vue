<template>
  <div>
    <!--    <div>config：{{ config }}</div>-->
    <!--    <div>prop：{{ prop }}</div>-->
    <!--    <div>data：{{ data }}</div>-->
    <div>{{ data[prop] }}</div>
  </div>
</template>

<script>
import { props } from '../basis'

export default {
  name: 'textComponent',
  props: {
    ...props
  }
}
</script>

<style scoped>

</style>
