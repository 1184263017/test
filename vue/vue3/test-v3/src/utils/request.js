import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});
// 添加响应拦截器
request.interceptors.response.use(
  (response) => response,
  (error) => {
    // 处理请求错误
    ElMessage.error(error.response.data.message);
    return Promise.reject(error);
  },
);
export default request;
