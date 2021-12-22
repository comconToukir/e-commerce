export const increaseAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'INCREASE-AMOUNT',
      payload: {
        amount
      }
    })
  }
}

export const decreaseAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type:'DECREASE-AMOUNT',
      payload: {
        amount
      }
    })
  }
}

export const addToCart = (product, amount) => {
  return (dispatch) => {
    dispatch({
      type:'ADD-TO-CART',
      payload: {
        product,
        amount
      }
    })
  }
}

export const removeFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE-FROM-CART',
      payload: product
    })
  }
}