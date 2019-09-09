import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: 'https://m.maizuo.com/', //请求接口的的公共路径后边会自动拼接请求参数
  timeout: 5000 // 这个表示请求最长时间
})

// request interceptor X-Host: mall.film-ticket.film.list
// 请求拦截器，拦截请求并拼接要携带的参数
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // 发送请求之前要做的事儿
    config.headers['X-client-Info'] = '{"a":"3000","ch":"1002","v":"5.0.4","e":"15670014718602819495825"}'
    config.headers['X-Host'] = config.data.xHost
    if (config.url.indexOf('__CITYID__') !== -1) {
      config.url = config.url.replace('__CITYID__', 'cityId=' + store.state.cityId)
    }
    // 在请求发送之后清除掉配置的参数
    delete config.data.xHost
    return config
  },
  error => {
    // do something with request error
    // 处理请求错误
    console.log(error) // for debug --->为调试
    return Promise, reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * 如果您想获得http信息，例如头信息或状态信息
   * Please return  response => response
   * 请返回response => response
   */

  /**
   * Determine the request status by custom code
   * 通过自定义代码确定请求状态
   * Here is just an example
   * 这里只是一个例子
   * You can also judge the status by HTTP Status Code
   * 您还可以通过HTTP状态代码来判断状态
   */
  response => {
    const res = response.data

    // if the custom code is not 0, it is judged as an error.
    // 如果自定义代码不是0，则判断为错误。
    if (res.status !== 0) {
      console.log('请求有误', res.msg)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug ---> 为调试
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
