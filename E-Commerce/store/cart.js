import Vue from 'vue'

export const state = () => ({
  cartItems: [],
})

export const mutations = {

  // add product in cart
  addToCart(state, product) {
    let productInCart = state.cartItems.find((item) => {
      return item.product.id === product.id
    })

    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cartItems.push({
        product,
        quantity: 1,
      })
    }

    Vue.notify({
      group: 'notify',
      type: 'success',
      title: 'Added',
      duration: 5000,
      heigth: 100,
      text: 'Product Added in Cart Successfully !!',
    })
  },

  // remove one product from cart
  decrementQuantity(state, product) {
    let productInCart = state.cartItems.find((item) => {
      return item.product.id === product.id
    })

    if (productInCart.quantity > 1) {
      productInCart.quantity--
    } else {
      state.cartItems = state.cartItems.filter((item) => {
        return item.product.id !== product.id
      })
    }
    Vue.notify({
      group: 'notify',
      type: 'warn',
      title: 'Removed',
      duration: 2000,
      heigth: 100,
      text: 'Product Removed from Cart Successfully !!',
    })
  },

  // remove all quantities of product from cart
  removeItem(state, product) {
    state.cartItems = state.cartItems.filter((item) => {
      return item.product.id !== product.id
    })
    Vue.notify({
      group: 'notify',
      type: 'warn',
      title: 'Removed',
      duration: 2000,
      heigth: 100,
      text: 'Product Removed from Cart Successfully !!',
    })
  },
}

export const getters = {
  // cart items
  cartItems: (state) => state.cartItems,

  // cart quantities
  cartQuantities: (state) => {
    let total = 0

    state.cartItems.forEach((item) => {
      total += item.quantity
    })

    return total
  },

  // cart total
  cartTotal: (state) => {
    let total = 0

    state.cartItems.forEach((item) => {
      total += item.product.price * item.quantity
    })

    return total
  },
}
