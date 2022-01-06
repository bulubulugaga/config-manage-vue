/*
 * @Author: liu
 * @Date: 2022-01-04 17:44:11
 * @LastEditTime: 2022-01-06 11:58:22
 * @Description: 封装axios接口请求
 */
import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/utils/store';

// 跨域携带cookie信息
axios.defaults.withCredentials = true;

// 创建实例
const instance = axios.create({
  baseURL: '/api/whole-process',
  timeout: 30000,
  validateStatus(status) {
    switch (status) {
      case 400: Message.error('请求出错'); break;
      case 401:
        Message.warning('授权失败，请重新登录');
        store.commit('LOGIN_OUT');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      case 403: Message.warning('拒绝访问'); break;
      case 404: Message.warning('请求错误,未找到该资源'); break;
      case 500: Message.warning('服务端错误'); break;
    }
    return status >= 200 && status < 300
  }
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    const token = store.get('token');
    config.headers.Accept = '*/*';
    // 请求头添加token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // if (appcode) config.headers.appcode = appcode; // 请求头
    }
    return config
  },
  error => Promise.reject(error)
);

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    if (response.data.code && response.data.code !== 200) {
      Message.error('请求出错');
      return Promise.reject(response.data.data);
    }
    return response;
  },
  error => {
    if (!error || !error.response) {
      Message.error('连接服务器失败');
    }
    else if (error.response.data.code == "8002") {
      store.commit('LOGIN_OUT');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      Message.error('登录超时，请重新登录');
    }
    else {
      Message.error(error.response.data.message);
    }
    return Promise.reject(error.response);
  }
)

export { instance as axios };
