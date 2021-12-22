const amountReducer = (state = 0, action) => {
  if (action.type === 'INCREASE-AMOUNT') {
    return state + 1;
  }
  if (action.type === 'DECREASE-AMOUNT') {
    return state - 1;
  }
  else {
    return state;
  }
}

export default amountReducer;