/*
 * @Author: liu
 * @Date: 2022-01-05 17:01:48
 * @LastEditTime: 2022-01-05 17:51:21
 * @Description: 用户信息
 */
import * as types from "../mutation-types";

const storeState = {
  token: getToken(),
  userInfo: store.get("userInfo"),
};
const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo,
};
const mutations = {
  [types.SET_TOKEN](state, data) {
    state.token = data;
    if (data) {
      setToken(data);
    } else {
      removeToken();
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
  },
  // 获取菜单数据
  getMenuTreeListData({ commit }) {
    return new Promise((resolve, reject) => {
      loginApi.getMenuListTree(this.getters.appInfo.appId).then(
        response => {
          commit(types.SET_MENUTREELIST, response.data.data);
          resolve(response);
        },
        error => { reject(error); }
      )
    })

  },
  getMyPermission({ commit }) {
    return new Promise((resolve, reject) => {
      loginApi.getMyPermission({ appId: this.getters.appInfo.appId }).then(
        response => {
          if (response.data.code === 200) {
            commit(types.SET_MY_PERMISSION, response.data.data);
            resolve(response)
          } else {
            Notice.error({
              title: response.data.code,
              desc: response.data.message,
              duration: 3,
              onClose: () => {
                if (process.env.NODE_ENV === "development") {
                  window.location.href = `${window.location.protocol}//${window.location.hostname}:8090/#/login`;
                } else {
                  window.location.href = `${window.location.protocol}//admin.smartpark.zwehs.com/#/login`;
                }
              }
            })

          }

        },
        error => { reject(error) }
      )
    })
  }
};

export default {
  state: storeState,
  getters,
  mutations,
  actions
};
