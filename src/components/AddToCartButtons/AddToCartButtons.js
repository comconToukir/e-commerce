import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart } from '../../state/action-creators/index';

const AddToCartButtons = (props) => {
  // const { title, price, amount } = props.product;
  // const [amount, setAmount] = useState(0);
  const [amount, setAmount] = useState(0);

  const { title, price } = props.product;
  const dispatch = useDispatch();

  // console.log(props);

  // const item = useSelector(state => {state.cart.filter(a => a.name === title)});
  
  
  //   if (item === undefined || item.length === 0) {
  //     setAmount(0)
  //     // return amount
  //   } else {
  //     setAmount(item[0].amount)
  //     // return amount
  //   }





  const handlePlus = (title1, price1) => {
    setAmount(amount + 1);
    dispatch(increaseAmount(title1, price1))
  }

  const handleMinus = (title1, price1) => {
    setAmount(amount + 1);
    dispatch(decreaseAmount(title1, price1))
  }


  const handleAddToCart = (title1, price1) => {
    dispatch(addToCart(title1, price1))
    handlePlus(title1, price1);
  }

  const addToCartToggle = () => {
    return ( amount < 1 || amount === undefined ? 
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
      <InputGroup style={{width: '130px'}}>
        <Button 
          variant="dark"
          onClick={()=>handleMinus(title, price)}
        >
          <FontAwesomeIcon icon={faMinus}/>
        </Button>
        <div className="d-flex" style={{width: '52px'}}>
          <span className="m-auto">{amount}</span>
        </div>
        <Button 
          variant="dark"
          onClick={()=>handlePlus(title, price)}
        >
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
      </InputGroup>
    )
  }
  return (
    <>
      {addToCartToggle()}
    </>
  );
};

export default AddToCartButtons;