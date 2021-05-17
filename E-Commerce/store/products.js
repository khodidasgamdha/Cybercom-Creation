import { db } from '../firebase'

export const state = () => ({
  products: [],
  product: [],
})

export const actions = {

  // get products
  getProducts({ commit }, product) {
    commit('emptyProducts')
    db.collection(`products/${product.category}/${product.subCategory}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('getProduct', doc.data())
        })
      })
  },

  // get perticular product details
  productDetail({ commit }, product) {
    db.collection(`products/${product.category}/${product.subCategory}`)
      .doc(product.id)
      .get()
      .then((doc) => {
        commit('productDetail', doc.data())
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  },
}

export const mutations = {
  emptyProducts(state) {
    state.products = []
  },

  getProduct(state, product) {
    state.products.push(product)
  },

  productDetail(state, product) {
    state.product = product
  },
}

export const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
}
