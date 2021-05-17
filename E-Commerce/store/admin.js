import { db } from '../firebase'
import Vue from 'vue'

export const actions = {

  // add product
  addProducts(product) {
    // var newProductRef = db.collection('products').doc()
    // newProductRef
    //   .set({
    //     id: newProductRef.id,
    //     name: product.name,
    //     img: product.img,
    //     brandName: product.brandName,
    //     category: product.category,
    //     productType: product.productType,
    //     price: product.price,
    //     rating: product.rating,
    //     description: product.description,
    //   })
    //   .then(() => {
    //     console.log('Document successfully Added!')
    //   })
    //   .catch((error) => {
    //     console.error('Error writing document: ', error)
    //   })
  },

  // delete product
  deleteProduct(id) {
    // db.collection('products')
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //     Vue.notify({
    //       group: 'notify',
    //       type: 'success',
    //       title: 'Deleted',
    //       duration: 5000,
    //       heigth: 100,
    //       text: 'Product Deleted from Database !!',
    //     })
    //   })
    //   .catch((error) => {
    //     console.error('Error removing document: ', error)
    //   })
  },

  // update product
  updateProduct(product) {
    // db.collection('products')
    //   .doc(product.id)
    //   .set({
    //     id: product.id,
    //     name: product.name,
    //     img: product.img,
    //     brandName: product.brandName,
    //     category: product.category,
    //     productType: product.productType,
    //     price: product.price,
    //     rating: product.rating,
    //     description: product.description,
    //   })
    //   .then(() => {
    //     console.log('Document successfully Updated!')
    //   })
    //   .catch((error) => {
    //     console.error('Error writing document: ', error)
    //   })
  },
}
