import axios from 'axios'
import { Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 3000 // 设置超时时间为3s
// 配置axios发送请求时携带cookie
axios.defaults.withCredentials = true
// 如果为开发环境，将baseURL设置为服务器地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}
axios.defaults.headers.delete['Content-Type'] = 'application/json, charset=utf-8'

//resquest请求拦截
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(config => {
  console.log(config);
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });


//异步请求前在header里加入token
axios.interceptors.request.use(
  config => {
    if(config.url==='/login'){  //如果是登录和注册操作，则不需要携带header里面的token
    }else{
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization= localStorage.getItem('Authorization');
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error => {
    if(error.response){
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization');
          this.$router.push('/');
      }
    }
  }
)

// export function post(url,data ={}) {
//   return new Promise((resolve,reject)=>{
//     axios.post(url,data)
//       .then(response=>{
//         resolve(response.data);
//       },err=>{
//         reject(err);
//       })
//   })
// }


export default axios
