// 用户相关请求模块
import request from '@/utils/request'
// import store from '@/store'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
// 发送验证码
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取用户自己的信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
    // headers: {
    //   // Bearer 是固定的格式
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}
// 获取用户频道列表
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}
