export const state = () => ({
  course: 'Welcome !!',
})

export const mutations = {
  setCourse(state, payload) {
    state.course = payload
  },
}

export const getters = {
  upperCaseCourse(state, getters) {
    return state.course.toUpperCase()
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req, app: { $cookies } }) {
    if (req.headers.cookie) {
      if ($cookies.get('token')) {
        commit('auth/setLoggedIn', true)
      }
    }
  },
}
