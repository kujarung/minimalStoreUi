import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import product from './modules/product'
import user from './modules/user'
import Cookies from 'js-cookie'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const cookieSaveIgnoreList = ['loading', 'product']
export default new Vuex.Store({
  modules: {
    user,
    loading,
    product
  },
  plugins: [
    // 쿠키 저장 설정
    createPersistedState({
      // 쿠키 key
      key: 'minimal',

      // 저장 설정 (https://github.com/robinvdvleuten/vuex-persistedstate)
      storage: {
        getItem: key => Cookies.get(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => Cookies.set(key, value, { expires: 1}),
        removeItem: key => Cookies.remove(key),
      },

      /*
       * A function that will be called to reduce the state to persist based on the given paths.
       * Defaults to include the values.
       */
      reducer: persistedState => {
        const stateFilter = Object.assign({}, persistedState)

        // 쿠키저장이 필요없는 store는 무시 처리
        cookieSaveIgnoreList.forEach(item => {
          delete stateFilter[item]
        })

        // console.info('stateFilter :: ', stateFilter)
        return stateFilter
      },
    }),
  ],  
})
