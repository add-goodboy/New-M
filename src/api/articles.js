// 文章请求模块
// 用户相关请求模块
import request from '@/utils/request'
// 请求文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
