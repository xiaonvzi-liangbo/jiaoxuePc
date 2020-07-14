import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
  baseURL: "http://192.168.2.103:8021",
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})

// 请求拦截 interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 相应拦截
service.interceptors.response.use(

  (response) => {
    console.log(response.data, "----------------- response.data");

    return response.data
    /*  if (res.code !== 20000) {
       Message({
         message: res.message || 'Error',
         type: 'error',
         duration: 5 * 1000
       })
       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
         MessageBox.confirm(
           '你已被登出，可以取消继续留在该页面，或者重新登录',
           '确定登出',
           {
             confirmButtonText: '重新登录',
             cancelButtonText: '取消',
             type: 'warning'
           }
         ).then(() => {
           UserModule.ResetToken()
           location.reload() // To prevent bugs from vue-router
         })
       }
       // return Promise.reject(new Error(res.message || 'Error'))
     } else {
 
 
       return response.data
     } */
  },
  (error) => {
    console.log(error, "----------------- error.data");
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
