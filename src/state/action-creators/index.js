export const increaseAmount = (name, price) => {
  return (dispatch) => {
    dispatch({
      type: 'INCREASE-AMOUNT',
      payload: {
        name,
        price
      }
    })
  }
}

export const decreaseAmount = (name, price) => {
  return (dispatch) => {
    dispatch({
      type:'DECREASE-AMOUNT',
      payload: {
        name,
        price
      }
    })
  }
}

export const addToCart = (name, price) => {
  return (dispatch) => {
    dispatch({
      type:'ADD-TO-CART',
      payload: {
        name,
        price
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