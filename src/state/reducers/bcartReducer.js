const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  const lastCart = state[Object.keys(state)[Object.keys(state).length - 1]]
  const i = lastCart.findIndex( a => a.name === action.payload.name);

  if (action.type === 'ADD-TO-CART') {
    const newItem = {
      name: action.payload.name,
      price: action.payload.price,
      amount: 0
    }
    const newCart = [...state.cart, newItem]
    return {...state, cart: newCart};
  }
  else if (action.type === 'DECREASE-AMOUNT') {
    const newItem = {
      name: action.payload.name,
      price: action.payload.price,
      amount: state.cart[i].amount - 1
    }
    const newCart = [
      ...lastCart.slice(0, i),
      newItem,
      ...lastCart.slice(i + 1)
    ]
    return {...state, cart: newCart}
  }
  else if (action.type === 'INCREASE-AMOUNT') {
    const newItem = {
      name: action.payload.name,
      price: action.payload.price,
      amount: lastCart[i].amount + 1,
    }
    const newCart = [
      ...lastCart.slice(0, i),
      newItem,
      ...lastCart.slice(i + 1)
    ]
    return {...state, cart: newCart}
  }
  else if (action.type === 'REMOVE-FROM-CART') {
    const remainingCart = lastCart.filter(item => item.name !== action.name)
    return {...state, cart: remainingCart}
  }
  else {
    return state;
  }
}

export default cartReducer;