import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart, removeFromCart } from '../../state/action-creators/index';

const AddToCartButtons = ( props ) => {
  const { title, price } = props.product;

  const dispatch = useDispatch();

  const handlePlus = (title1, price1) => {
    dispatch(increaseAmount(title1, price1));
  }

  const handleMinus = (title1, price1) => {
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
      <div className="d-flex">
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
          className="ms-auto d-grid"
          variant="dark"
          // style={{width: "40px"}}
          onClick={()=>dispatch(removeFromCart(title))}
          >
            <img
              // className="d-block w-100"
              style={{width: "23px"}}
              src={process.env.PUBLIC_URL + '/icons/circle-xmark-regular.svg'}
              alt="Remove from cart"
            />
        </Button>
      </div>
    )
  }
  return (
    <>
      {addToCartToggle()}
    </>
  );
};

export default AddToCartButtons;