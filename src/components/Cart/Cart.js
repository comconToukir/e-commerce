import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import AddToCartButtons from '../AddToCartButtons/AddToCartButtons';

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
            <>
              <p className="truncate-overflow-cart-item">{cartItem.name}</p>
              <AddToCartButtons />
            </>
          )
        })
      }
    </div>
  );
};

export default Cart;