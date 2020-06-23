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
  state: {
    // 로딩 관련
    loading: {
      count: 0,
    },
    // 물품 위치 정보 저장
    product : {
      currentPage : 1,
      scrollY : 0,
    },
    // 유저 정보 저장
    user : {
      
    }
  },
  getters: {
    loading: state => state.loading,
    product: state => state.product,
    user: state => state.user,
  },  
  // actions : 비동기 처리 로직 정의. vue 컴포넌트에서 dispatch를 이용해 호출하는 메소드
  actions: {
    addLoading(context) {
      context.commit('addLoading')
    },
    /*
     * 로딩바가 표시됨과 동시에 사라질 경우 화면이 어색하게 느껴지는 문제를 해결
     */
    removeLoading(context) {
      setTimeout(() => {
        context.commit('removeLoading')
      }, 1000)
    },
  },
  // mutations : 동기 처리 로직 정의.
  mutations: {
    addLoading(state) {
      state.loading.count += 1
    },

    removeLoading(state) {
      if (state.loading.count > 0) {
        state.loading.count -= 1
      }
    },

    addPage(state) {
      ++state.product.currentPage
    },
    
    setScrollY(state, {posY}) {
      state.product.scrollY = posY
    }    
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
