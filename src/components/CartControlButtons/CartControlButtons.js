import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, removeFromCart } from '../../state/action-creators/index';

const CartControlButtons = (props) => {
  const { title, price, amount } = props;

  const dispatch = useDispatch();

  const handlePlus = (title1, price1) => {
    dispatch(increaseAmount(title1, price1))
  }

  const handleMinus = (title1, price1, amount1) => {
    if (amount1 > 0) {
      dispatch(decreaseAmount(title1, price1));
    } 
    else {
      dispatch(removeFromCart(title));
    }
  }

  if (amount === 0) {
    dispatch(removeFromCart(title));
  }

  return (
    <>
      <InputGroup style={{width: '130px'}}>
        <Button 
          className="ms-auto"
          variant="dark"
          onClick={()=>handleMinus(title, price, amount)}
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
      <Button 
          className="ms-2"
          variant="dark"
          onClick={()=>dispatch(removeFromCart(title))}
        >
          X
        </Button>
    </>
  );
};

export default CartControlButtons;