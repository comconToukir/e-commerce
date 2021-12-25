const cartReducer = (state = [], action) => {
  const i = state.findIndex( a => a.name === action.payload.name);
  if (action.type === 'ADD-TO-CART') {
    return [...state, {name: action.payload.name, price: action.payload.price, amount: 0}]
    // return [...state, {name: action.payload.name}]
  }
  else if (action.type === 'REMOVE-FROM-CART') {
    return state.filter(a => a.name !== action.payload.name)
    // return state.filter(a => a.name !== action.payload.name)
  }
  else if (action.type === 'INCREASE-AMOUNT') {
    return [
      ...state.slice(0, i),
      {
        name: action.payload.name,
        price: action.payload.price,
        amount: state[i].amount + 1
      },
      ...state.slice(i + 1)
    ]
  }
  else if (action.type === 'DECREASE-AMOUNT') {
    return [
      ...state.slice(0, i),
      {
        name: action.payload.name,
        price: action.payload.price,
        amount: state[i].amount - 1
      },
      ...state.slice(i + 1)
    ]
  }
  else {
    return state;
  }
}

export default cartReducer;