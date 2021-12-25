import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart, removeFromCart } from '../../state/action-creators/index';
// import amountDisplay from '../amountDisplay/amountDisplay';
// import store from '../../state/store';

const AddToCartButtons = ( props ) => {
  // const { title, price, amount } = props.product;
  // const [amount, setAmount] = useState(0);
  // const [amount, setAmount] = useState(0);

  const { title, price } = props.product;
  // const { amount } = props.amount;
  // const { cart } = props.cart;
  console.log(props.amount)

  // const { amount } = props.amount;
  const dispatch = useDispatch();

  // console.log(props);
  // let item = [];
  // if (cart === undefined || cart.length === 0) {
  //   item = [];
  // } else {
  //   item = cart.filter(a => a.name === title);
  // }
  
  // let item = [];
  // store.subscribe(() => {
  //   item = store.getState();
  // });
  // console.log(item);
  
  // let amount = 0;
  
  // if (item === undefined || item.length === 0) {
  //   amount = 0;
  //   // setAmount(0);
  // } else {
  //   amount = item[0].amount;
  //   // setAmount(item[0].amount);
  // }
  // console.log(amount);

  const handlePlus = (title1, price1) => {
    // setAmount(amount + 1);
    dispatch(increaseAmount(title1, price1));
  }

  const handleMinus = (title1, price1) => {
    // setAmount(amount - 1);
    if (props.amount > 0) {
      dispatch(decreaseAmount(title1, price1));
    } else {
      dispatch(removeFromCart(title1));
    }
  }


  const handleAddToCart = (title1, price1) => {
    dispatch(addToCart(title1, price1))
    handlePlus(title1, price1);
  }

  const addToCartToggle = () => {
    return ( props.amount < 1 || props.amount === undefined ? 
      <Button 
        variant="dark"
        onClick={()=>handleAddToCart(title, price)}
        >
        Add To cart
        <FontAwesomeIcon 
          style={{marginLeft: '7px'}}
          icon={faShoppingCart} 
          />
      </Button>
      :
      <>
      <InputGroup style={{width: '130px'}}>
        <Button 
          variant="dark"
          onClick={()=>handleMinus(title, price)}
        >
          <FontAwesomeIcon icon={faMinus}/>
        </Button>
        <div className="d-flex" style={{width: '52px'}}>
          <span className="m-auto">{props.amount}</span>
        </div>
        <Button 
          variant="dark"
          onClick={()=>handlePlus(title, price)}
        >
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
      </InputGroup>

      <Button 
        className="ms-2"
        variant="dark"
        onClick={()=>dispatch(removeFromCart(title))}
        >
        X
      </Button>
      </>
    )
  }
  return (
    <>
      {addToCartToggle()}
    </>
  );
};

export default AddToCartButtons;