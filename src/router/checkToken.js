import store from '@/store'

export default (to, from, next) => {
  if (store.getters.user.token) {
    return next()
  } else {
    path: '/notPermitted'
  }
}
