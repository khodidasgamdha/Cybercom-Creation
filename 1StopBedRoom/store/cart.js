// import Vue from 'vue'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addToCart(state, { product, quantity }) {
    const qntty = parseInt(quantity)
    let productInCart = state.cartItems.find((item) => {
      return item.product.sku === product.sku
    })

    if (productInCart) {
      productInCart.quantity += qntty;
    } else {
      state.cartItems.push({
        product,
        quantity: qntty
      })
    }
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
