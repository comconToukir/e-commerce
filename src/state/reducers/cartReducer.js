const cartReducer = (state = [], action) => {
  if (action.type === 'ADD-TO-CART') {
    return [...state, action.payload]
  }
  else if (action.type === 'REMOVE-FROM-CART') {
    return state.filter(product => product !== action.payload)
  }
  else {
    return state;
  }
}

export default cartReducer;