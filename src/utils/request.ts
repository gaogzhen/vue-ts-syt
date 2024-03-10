// axios二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus';
// 创建axios实例：设置基础请求路径、超时时间
const request = axios.create({
    baseURL: '/api', //请求的基础路径
    timeout: 5000 // 超时时间

})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // config：请求拦截器回调注入的对象（配置对象）
    return config;
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // response：响应拦截器回调注入的对象（响应对象）
    return response.data;
},(error) => {
  // 处理http网络错误
  let status = error.response.status
  switch (status) {
    case 404:
      ElMessage({
        type: 'error',
        message: '请求资源不存在'
      })
      break;
    case 500|501|502|503:
      ElMessage({
        type: 'error',
        message: '服务器异常，请稍后再试！’'
      })
      break;
    case 401:
      ElMessage({
        type: 'error',
        message: '未授权访问'
      })
      break;
    default:
      break;
  }
  return Promise.reject(new Error(error.message))
})

// 对外暴露axios实例
export default request;
