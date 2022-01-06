/*
 * @Author: liu
 * @Date: 2022-01-05 17:01:48
 * @LastEditTime: 2022-01-06 12:11:16
 * @Description: 用户信息
 */
import * as types from "../mutation-types";
import store from '@/utils/store';

const storeState = {
  token: store.get('token'),
  userInfo: store.get('userInfo'),
};
const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo,
};
const mutations = {
  [types.SET_TOKEN](state, data) {
    state.token = data;
    if (data) {
      store.set('token', data);
    } else {
      store.remove('token');
    }
  },
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data;
    if (data) {
      store.set("userInfo", data);
    } else {
      store.remove("userInfo");
    }
  }
};
const actions = {
  doLogin({ commit }, params) {
    return new Promise((resolve, reject) => {
      loginApi.login(params).then(
        response => {
          commit(types.SET_TOKEN, response.data.data.token);
          resolve(response);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      loginApi.getLoginUserInfo().then(
        response => {
          commit(types.SET_USER_INFO, response.data.data);
          resolve(response);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  loginOut({ commit }) {
    commit(types.SET_TOKEN, null);
    commit(types.SET_USER_INFO, null);
    window.localStorage.clear();
    window.sessionStorage.clear();
    // TODO:
    // if (process.env.NODE_ENV === 'development') {
    //   window.location.href = `${window.location.protocol}//${window.location.hostname}:8090/#/login`
    // } else {
    //   window.location.href = `${window.location.protocol}//admin.smartpark.zwehs.com/#/login`
    // }
  }
};

export default {
  state: storeState,
  getters,
  mutations,
  actions
};
