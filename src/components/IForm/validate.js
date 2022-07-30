const validatePhone = (reles, val, callback) => {
  const regPhone = /^1[3-9]\d{9}$/
  if (!regPhone.test(val)) {
    return callback(new Error('请输入正确电话号码'))
  } else {
    return callback()
  }
}

export { validatePhone }
