export const state = () => ({
  cartItems: []
})

export const mutations = {
  addItem(state, payload) {
    state.cartItems.push(payload)
  },
  removeItem(state, payload) {
    state.cartItems.slice(0, payload.id)
  },
}

export const getters = {
  cartItems: (state) => state.cartItems,
};