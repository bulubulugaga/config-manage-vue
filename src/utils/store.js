/*
 * @Author: liu
 * @Date: 2022-01-06 10:59:21
 * @LastEditTime: 2022-01-06 10:59:41
 * @Description: 本地存储
 */
import engine from 'store/src/store-engine'
import localStorage from 'store/storages/localStorage'
import sessionStorage from 'store/storages/sessionStorage'
import expirePlugin from 'store/plugins/expire'
import defaults from 'store/plugins/defaults'
const store = engine.createStore(
  [
    localStorage
  ],
  [
    defaults,
    expirePlugin
  ]
)
//  存储sessionStorage
const sessionStore = engine.createStore(
  [
    sessionStorage
  ],
  [
    defaults,
    expirePlugin
  ]
)
export default {
  get(key) {
    return store.get(key)
  },
  set(key, value, expire) {
    if (expire) {
      store.set(key, value, expire)
    } else {
      store.set(key, value)
    }
  },
  remove(key) {
    store.remove(key)
  },
  clearAll() {
    store.clearAll()
  },
  getSession(key) {
    return sessionStore.get(key)
  },
  setSession(key, value, expire) {
    if (expire) {
      sessionStore.set(key, value, expire)
    } else {
      sessionStore.set(key, value)
    }
  },
  removeSession(key) {
    sessionStore.remove(key)
  },
  clearAllSession() {
    sessionStore.clearAll()
  }
}
