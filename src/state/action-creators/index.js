export const increaseAmount = (name, price, amount) => {
  return (dispatch) => {
    dispatch({
      type: 'INCREASE-AMOUNT',
      payload: {
        name,
        price,
        amount
      }
    })
  }
}

export const decreaseAmount = (name, price, amount) => {
  return (dispatch) => {
    dispatch({
      type:'DECREASE-AMOUNT',
      payload: {
        name,
        price,
        amount
      }
    })
  }
}

export const addToCart = (name, price, amount) => {
  return (dispatch) => {
    dispatch({
      type:'ADD-TO-CART',
      payload: {
        name,
        price,
        amount
      }
    })
  }
}

export const removeFromCart = (name) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE-FROM-CART',
      payload: {
        name
      }
    })
  }
}