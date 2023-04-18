import { requestConfig, requestMiddle, uploadMiddle, user } from 'duxweb'
import { Message } from '@arco-design/web-react'

requestConfig({
  upload: {
    defaultDrive: 'qiniu'
  }
})

// 处理返回值
requestMiddle.result(async (res, params) => {
  if (res.statusCode === 403) {
    Message.error('暂无权限操作该业务')
    throw {
      code: 403,
      message: '暂无权限操作该业务'
    }
  }
  if (res.header?.authorization) {
    user.setKey('token', res.header?.authorization)
  }
  if (res.statusCode === 200) {
    return res.data.data
  }
  throw {
    code: res.statusCode,
    message: res.data?.message || res.data,
    data: res.data?.data
  }
})

uploadMiddle.result(async (res, params) => {
  if (res.some(item => item.statusCode === 401)) {
    user.loginOut()
    throw '用户信息失效'
  }
  return res.map(item => {
    const data = JSON.parse(item.data)
    return params.getInfo ? data.data.list[0] : data.data.list[0].url
  })
})