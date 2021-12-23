import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
  const cartList = useSelector(state => {
    return state.cart;
  })
  console.log(cartList);
  return (
    <div>
      {
        cartList.map(cartItem => {
          return (
            <p className="truncate-overflow-cart-item">{cartItem.name}</p>
            
          )
        })
      }
    </div>
  );
};

export default Cart;