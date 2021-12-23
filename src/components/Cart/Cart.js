import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartControlButtons from '../CartControlButtons/CartControlButtons';

const Cart = () => {
  const cartList = useSelector(state => {
    return state.cart;
  })
  // console.log(cartList);

  return (
    <div>
      {
        cartList.map(cartItem => {
          return (
            <>
              <p className="truncate-overflow-cart-item">{cartItem.name}</p>
              
              {/* <CartControlButtons title={cartItem.name} price={cartItem.price} amount={cartItem.amount} /> */}
              <CartControlButtons title={cartItem.name} price={cartItem.price} amount={cartItem.amount} />
            </>
          )
        })
      }
    </div>
  );
};

export default Cart;