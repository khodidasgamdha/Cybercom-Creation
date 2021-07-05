export const state = () => ({
  id: 1,
  alladdresses: [],
  editAddress: null,
  defaultBilling: null,
  defaultShipping: null,
  additionalAddresses: false,
})

export const actions = {
  addAddress({ commit, state }, { address, billing, shipping }) {
    // assign const
    address.billingDefault = true
    address.shippingDefault = true
    address.id = state.id

    // if set as billing or shipping default is true
    if (billing || shipping) {
      // if billing & shipping default is true
      if (billing && shipping) {
        const bill = state.alladdresses.findIndex((item) => {
          return item.billingDefault === true
        })
        state.alladdresses[bill].billingDefault = false
        const ship = state.alladdresses.findIndex((item) => {
          return item.shippingDefault === true
        })
        state.alladdresses[ship].shippingDefault = false
      }

      // if billing default is true
      else if (billing) {
        address.shippingDefault = false
        const bill = state.alladdresses.findIndex((item) => {
          return item.billingDefault === true
        })
        state.alladdresses[bill].billingDefault = false
      }

      // if shipping default is true
      else {
        address.billingDefault = false
        const ship = state.alladdresses.findIndex((item) => {
          return item.shippingDefault === true
        })
        state.alladdresses[ship].shippingDefault = false
      }
    }

    // if default is false
    else if (state.alladdresses.length != 0) {
      address.billingDefault = false
      address.shippingDefault = false
    }
    commit('setAddress', address)
    commit('idIncrement')
  },
}

export const mutations = {
  // add address
  setAddress: (state, address) => {
    state.alladdresses.push(address)
  },

  // remove address
  removeAddress(state, id) {
    state.alladdresses.splice(
      state.alladdresses.findIndex((item) => item.id === id),
      1
    )
  },

  // update address
  updateAddress: (state, value) => {
    console.log(value)
    // const result = state.alladdresses.findIndex((item) => {
    //   return item.id === value.id
    // })
    // state.alladdresses[result] = value
  },

  // find address
  perticularAddress: (state, id) => {
    state.editAddress = state.alladdresses.find((item) => {
      return item.id === parseInt(id)
    })
  },

  // get default billing
  getBillingAddress: (state) => {
    state.defaultBilling = state.alladdresses.find(
      (item) => item.billingDefault === true
    )
  },

  // get default shipping
  getShippingAddress: (state) => {
    state.defaultShipping = state.alladdresses.find(
      (item) => item.shippingDefault === true
    )
  },

  // is additional address
  isAdditionalAddresses: (state) => {
    state.alladdresses.forEach((item) => {
      if (item.shippingDefault === false && item.billingDefault === false) {
        state.additionalAddresses = true
      }
    })
  },

  idIncrement: (state) => {
    state.id++
  },
}

export const getters = {
  addresses: (state) => state.alladdresses,
  editAddress: (state) => state.editAddress,
  defaultBilling: (state) => state.defaultBilling,
  defaultShipping: (state) => state.defaultShipping,
  additionalAddresses: (state) => state.additionalAddresses,
}
