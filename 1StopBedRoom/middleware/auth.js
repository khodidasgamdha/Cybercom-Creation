export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    redirect('/customer/account/login')
  }
}
