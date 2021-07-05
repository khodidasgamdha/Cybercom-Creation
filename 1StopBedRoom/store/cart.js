export const state = () => ({
  cartItems: [],
})

export const actions = {
  addToCart({ commit, state }, { product, quantity }) {
    const qntty = parseInt(quantity)
    let productInCart = state.cartItems.find((item) => {
      return item.product.sku === product.sku
    })
    if (productInCart) {
      commit('incrementQuantity', { productInCart, qntty })
    } else {
      commit('addProduct', { product, qntty })
    }
  }
}

export const mutations = {
  addProduct(state, { product, qntty }) {
    state.cartItems.push({
      product,
      quantity: qntty
    })
  },

  incrementQuantity(state, { productInCart, qntty }) {
    productInCart.quantity += qntty;
  },

  changeQuantity(state, { product, quantity }) {
    product.quantity = quantity;
  },

  removeItem(state, product) {
    state.cartItems.splice(product.product.sku, 1)
  },
}

export const getters = {
  cartItems: (state) => state.cartItems,

  cartQuantities: (state) => {
    let total = 0
    state.cartItems.forEach((item) => {
      total += item.quantity
    })
    return total
  },

  cartTotal: (state) => {
    let total = 0
    state.cartItems.forEach((item) => {
      total += item.product.price.split("$")[1] * item.quantity
    })
    return total
  },
}
