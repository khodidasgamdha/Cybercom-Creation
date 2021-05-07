export const state = () => ({
  token: false,
})

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
}
