
// 사용자 정보
const loading = {
  state: {
    loading: {
      count: 0,
    },
  },

  getters: {
    loading: state => state.loading,
  },

  actions: {
    addLoading(context) {
      context.commit('addLoading')
    },
    removeLoading(context) {
      setTimeout(() => {
        context.commit('removeLoading')
      }, 1000)
    },
  },

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
