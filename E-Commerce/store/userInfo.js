export const state = () => ({
  user: [],
  token: false,
})

export const mutations = {
  // set token after login
  setToken(state, payload) {
    state.token = payload
  },

  // set user details
  setUser(state, payload) {
    state.user = payload
  },
}

export const getters = {
  user: (state) => state.user,
};