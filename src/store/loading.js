/**
 * 로딩바 화면에 표현
 */
const loading = {
  state: {
    loading: {
      count: 0,
    },
  },

  // getters : state 에 바로 접근하는것 보다 getters 를 통해 접근하는 것을 권고한다.
  getters: {
    loading: state => state.loading,
  },

  // actions : 비동기 처리 로직 정의. vue 컴포넌트에서 dispatch를 이용해 호출하는 메소드
  actions: {
    addLoading(context) {
      context.commit('addLoading')
    },

    /*
     * 로딩바가 표시됨과 동시에 사라질 경우 화면이 어색하게 느껴지는 문제를 해결
     *
     * 0.3초 지연 숨김
     */
    removeLoading(context) {
      setTimeout(() => {
        context.commit('removeLoading')
      }, 300)
    },
  },

  // mutations : 동기 처리 로직 정의. state 값을 변경하고 이력을 남긴다.
  mutations: {
    addLoading(state) {
      state.loading.count += 1
    },
    removeLoading(state) {
      if (state.loading.count > 0) {
        state.loading.count -= 1
      }
    },
  },
}

export default loading
