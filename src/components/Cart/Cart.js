import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartControlButtons from '../CartControlButtons/CartControlButtons';

const Cart = () => {
  const cartList = useSelector(state => {
    return state.cart;
  })
  // console.log(cartList);

  let arr = [];
  cartList.map(item => arr.push(item.price * item.amount))
  let totalPrice = arr.reduce((acc, current) => acc + current, 0);
  // console.log(totalPrice);

  return (
    <div>
      {
        cartList.map(cartItem => {
          return (
            <>
              <div className="d-flex">
                <p className="me-auto truncate-overflow-cart-item">{cartItem.name}</p>
                <CartControlButtons title={cartItem.name} price={cartItem.price} amount={cartItem.amount} />
              </div>
            </>
          )
        })
      }
      <br />
        <span>Total Price: </span><span className='ms-auto'>$ {totalPrice}</span>
    </div>
  );
};

export default Cart;