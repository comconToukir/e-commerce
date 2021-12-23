const cartReducer = (cartList = [], action) => {
  const i = cartList.findIndex( a => a.name === action.payload.name);
  if (action.type === 'ADD-TO-CART') {
    return [...cartList, {name: action.payload.name, price: action.payload.price, amount: 0}]
  }
  else if (action.type === 'REMOVE-FROM-CART') {
    return cartList.filter(a => a.name !== action.payload.name)
  }
  else if (action.type === 'INCREASE-AMOUNT') {
    return [
      ...cartList.slice(0, i),
      {
        name: action.payload.name,
        price: action.payload.price,
        amount: cartList[i].amount + 1
      },
      ...cartList.slice(i + 1)
    ]
  }
  else if (action.type === 'DECREASE-AMOUNT') {
    return [
      ...cartList.slice(0, i),
      {
        name: action.payload.name,
        price: action.payload.price,
        amount: cartList[i].amount - 1
      }
    ]
  }
  else {
    return cartList;
  }
}

export default cartReducer;