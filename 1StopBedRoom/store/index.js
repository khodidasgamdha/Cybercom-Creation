export const actions = {
  nuxtServerInit({ commit }, { req, app: { $cookies } }) {
    if (req.headers.cookie) {
      if ($cookies.get('user')) {
        commit('auth/setLoggedIn', true)
        commit('auth/setUserInfo', $cookies.get('user'))
      }
    }
  },
}
