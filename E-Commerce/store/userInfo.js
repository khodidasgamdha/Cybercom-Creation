export const state = () => ({
  user: [],
  token: false,
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
  setUser(state, payload) {
    state.user = payload
  },
}

export const getters = {
  user: (state) => state.user,
};