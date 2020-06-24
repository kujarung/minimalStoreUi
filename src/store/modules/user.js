const defaultuser = {
  token : "",
}

// 사용자 정보
const user = {
  state: {
    user: Object.assign({}, defaultuser),
  },

  // getters : state 에 바로 접근하는것 보다 getters 를 통해 접근하는 것을 권고한다.
  getters: {
    user: state => state.user,
  },

  // actions : 비동기 처리 로직 정의. vue 컴포넌트에서 dispatch를 이용해 호출하는 메소드
  actions: {},

  // mutations : 동기 처리 로직 정의. state 값을 변경하고 이력을 남긴다.
  mutations: {
    setuser(state, token) {
      state.user = Object.assign(state.user, {token})
    },
    deleteuser(state) {
      state.user = Object.assign({}, defaultuser)
    },
  },
}

export default user
