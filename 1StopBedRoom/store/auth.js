export const state = () => ({
  loggedIn: false,
  userInfo: []
})

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload
  },
  setUserInfo(state, payload) {
    state.userInfo = payload
  }
}

export const getters = {
  user: (state) => state.userInfo,
}