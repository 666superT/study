<template>
  <div>
    <i-form
      :item="formItem"
      :field="formField"
      :button="formButton"
      :beforeSubmit="handleSubmit"
    ></i-form>
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
          },
          isType: 'input',
          trigger: 'change'
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
          sendCode: true
        },
        {
          label: '密码',
          prop: 'possword',
          type: 'input',
          isType: 'password',
          required: true
        },
        {
          label: '班级',
          prop: 'class',
          type: 'select',
          required: true,
          placeholder: '请选择班级',
          option: [
            {
              label: '一班',
              value: 1
            },
            {
              label: '二班',
              value: 2
            },
            {
              label: '三班',
              value: 3
            }
          ]
        },
        {
          label: '状态',
          prop: 'status',
          type: 'switch',
          activeText: '启用',
          inactiveText: '禁用',
          activeColor: 'red',
          activeValue: 1,
          inactiveValue: 0
        },
        {
          label: '出行工具',
          prop: 'car',
          type: 'checkbox',
          checkbox: [
            {
              text: '汽车',
              label: 1
            },
            {
              text: '火车',
              label: 2
            },
            {
              text: '飞机',
              label: 3
            }
          ]
        },
        {
          label: '性别',
          prop: 'sex',
          type: 'radio',
          radio: [
            {
              text: '男',
              label: 1
            },
            {
              text: '女',
              label: 2
            }
          ]
        },
        {
          label: '日期',
          prop: 'date',
          type: 'date',
          format: 'yyyy-MM-dd',
          valueFormat: 'yyyy-MM-dd',
          required: true,
          startPlaceholder: '开工时间',
          endPlaceholder: '结束时间',
          rangeSeparator: '至',
          model: 'daterange'
        },
        {
          label: '描述',
          prop: 'describe',
          type: 'input',
          isType: 'textarea'
        }
      ],
      formField: {
        phone: '',
        code: '',
        class: '',
        possword: '',
        status: 1,
        car: [],
        sex: 1,
        describe: '',
        date: ''
      },
      formButton: [
        {
          type: 'primary',
          text: '提交',
          method: 'submit',
          loading: false
        },
        {
          text: '重置',
          size: 'mini',
          method: 'reset',
          callback: () => {
            this.formItem[1].sendAccont = ''
          }
        }
      ]
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
    },
    handleSubmit() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 2000)
      })
    }
  },
  watch: {
    formField: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
}
</script>
