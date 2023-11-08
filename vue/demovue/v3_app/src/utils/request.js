import axios from 'axios';

const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});
// 请求拦截器;
request.interceptors.request.use(
  (config) => {
    // 添加请求头等前置处理
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // 请求错误处理
    console.log('Request Error:', error);
    return Promise.reject(error);
  },
);
// 添加响应拦截器
request.interceptors.response.use(
  (response) => response,
  (error) => {
    // 处理请求错误
    console.log(error);
    return Promise.reject(error);
  },
);
export default request;
