<template>
  <div>
    <i-form :item="formItem" :field="formField"></i-form>
  </div>
</template>

<script>
import IForm from '../components/IForm'
export default {
  name: 'formView',
  components: { IForm },
  data() {
    return {
      formItem: [
        {
          label: '电话',
          prop: 'phone',
          type: 'input',
          required: true,
          valueType: 'phone',
          callback: (val) => {
            this.formItem[1].sendAccont = val
          }
        },
        {
          label: '验证码',
          prop: 'code',
          type: 'input',
          required: true,
          sendAccont: '',
          beforeChange: () => {
            return this.getCode()
          },
          sendcode: true
        }
      ],
      formField: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    // 模拟获取验证码
    getCode() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>
