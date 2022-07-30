import { validatePhone } from './validate'

function createRules(data) {
  // 遍历传递过来的每一项
  data.forEach((item) => {
    const ruleArr = []
    // 如果每一项有required属性就添加校验
    if (item.required && item.required === true) {
      const rules = {
        required: true,
        // 如果有自定义提示信息就显示自定义，没有就自动生成
        message: item.message || createMessage(item),
        trigger: item.trigger || 'blur'
      }
      // 把自动添加的校验对象放进校验数组
      ruleArr.push(rules)
    }

    if (item.valueType === 'phone') {
      const rules = {
        validator: validatePhone,
        trigger: item.trigger || 'blur'
      }
      ruleArr.push(rules)
    }
    // 把校验数组添加到本行
    item.rules = ruleArr
  })
  // 返回表单数据进行渲染
  return data
}

function createMessage(item) {
  let msg = ''
  switch (item.type) {
    case 'input':
      msg = '请输入'
      break
    case 'select':
      msg = '请选择'
      break
  }
  return msg + item.label
}

export default createRules
