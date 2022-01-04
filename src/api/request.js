/*
 * @Author: liu
 * @Date: 2022-01-04 17:44:11
 * @LastEditTime: 2022-01-04 17:51:58
 * @Description: 封装axios接口请求
 */
import Vue from 'vue';
import axios from 'axios';
import { Notification } from 'element-ui';

axios.defaults.withCredentials = true;

const service = axios.create({
  baseURL: '/api/whole-process', // api base_url
  timeout: 30000 // 请求超时时间
});
