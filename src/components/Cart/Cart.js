import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const amount = useSelector(state=>{
    return state.amount;
  })
  console.log(amount);
  return (
    <div>
      <p>{amount}</p>
    </div>
  );
};

export default Cart;