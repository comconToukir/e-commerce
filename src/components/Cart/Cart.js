import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
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
  totalPrice = Math.round(totalPrice * 100) / 100;
  // console.log(totalPrice);

  return (
    <div>
      {
        cartList.map(cartItem => {
          return (
            <>
              <div className="d-flex align-items-center mb-2">
                <span className="me-auto truncate-overflow-cart-item">{cartItem.name}</span>
                <CartControlButtons title={cartItem.name} price={cartItem.price} amount={cartItem.amount} />
              </div>
            </>
          )
        })
      }
      <br />
      <div className="d-flex align-items-center font-weight-bold lightblue-bg">
        <span>Total Price: </span><span className='ms-auto me-3'>$ {totalPrice}</span>
      <Button variant="dark" className>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;