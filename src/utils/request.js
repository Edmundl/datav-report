/**
 * Created by IntelliJ IDEA.
 * @project: datav-report
 * @author: zhangzhang - Lavender
 * @date: 2023/5/30 21:30:24
 * @description: 网络请求
 */

import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      // console.log(response.data)
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
