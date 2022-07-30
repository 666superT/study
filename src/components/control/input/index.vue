<template>
  <div class="inp">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <el-button
      :loading="loading"
      v-if="config.sendcode"
      round
      type="primary"
      size="mini"
      :disabled="disabled"
      @click.stop="handleSendCode"
      >{{ text }}</el-button
    >
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  props: {
    ...props
  },
  mixins: [mixin],
  data() {
    return {
      text: '点击发送验证码',
      loading: false,
      disabled: false,
      s: 59,
      timer: null
    }
  },
  methods: {
    handleSendCode() {
      const regPhone = /^1[3-9]\d{9}$/
      const beforeChange = this.config.beforeChange
      // 如果手机号码格式不正确不继续执行
      // console.log(regPhone.test(this.config.sendAccont))
      if (regPhone.test(this.config.sendAccont) === false) {
        this.$message.error('请输入正确的手机号')
        return false
      }
      // 显示发送中
      this.loading = true
      this.text = '发送中...'
      // 获取验证码
      if (
        beforeChange &&
        Object.prototype.toString.call(beforeChange) === '[object Function]'
      ) {
        beforeChange()
          // 验证码请求成功
          .then(() => {
            this.$message.success('发送成功')
            this.disabled = true
            this.loading = false
            this.text = '60s后重新发送'
            this.timer = setInterval(() => {
              this.text = `${this.s--}s后重新发送`
              if (this.s <= 0) {
                clearInterval(this.timer)
                this.disabled = false
                this.text = '重新发送'
                this.s = 59
                this.timer = null
              }
            }, 1000)
          })
          // 验证码请求失败
          .catch(() => {
            this.$message.error('发送失败')
            this.loading = false
            this.text = '重新发送'
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inp {
  position: relative;
  .el-button {
    position: absolute;
    right: 25px;
    top: 7px;
  }
}
</style>
