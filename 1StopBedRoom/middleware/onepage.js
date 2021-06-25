export default function ({ redirect, store }) {
  const cartProducts = !!store.state.cart.cartItems.length
  if (!cartProducts) {
    redirect('/checkout/cart')
  }
}
