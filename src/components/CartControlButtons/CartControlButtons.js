import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart, removeFromCart } from '../../state/action-creators/index';

const CartControlButtons = (props) => {
  // const { title, price, amount } = props.product;
  const { title, price, amount } = props;

  // const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handlePlus = (title1, price1) => {
    // setAmount(amount + 1);
    dispatch(increaseAmount(title1, price1))
  }

  // const handleMinus = (title1, price1) => {
  //   // setAmount(amount - 1);
  //   dispatch(decreaseAmount(title1, price1));
  //   autoRemove(title1);
  // }

  const handleAddToCart = (title1, price1) => {
    dispatch(addToCart(title1, price1))
    handlePlus(title1, price1);
  }

  const handleMinus = (title1, price1, amount1) => {
    console.log(amount1);
    if (amount1 > 0) {
      dispatch(decreaseAmount(title1, price1));
    } 
    else {
      dispatch(removeFromCart(title));
    }
  }

  // const addToCartToggle = () => {
    // return (
    // return ( amount < 1 | amount === undefined ? 
    //   <Button 
    //     variant="dark"
    //     onClick={()=>handleAddToCart(title, price)}
    //     >
    //     Add To cart
    //     <FontAwesomeIcon 
    //       style={{marginLeft: '7px'}}
    //       icon={faShoppingCart} 
    //       />
    //   </Button>
    //   :
      // <InputGroup style={{width: '130px'}}>
      //   <Button 
      //     variant="dark"
      //     onClick={()=>handleMinus(title, price, amount)}
      //   >
      //     <FontAwesomeIcon icon={faMinus}/>
      //   </Button>
      //   <div className="d-flex" style={{width: '52px'}}>
      //     <span className="m-auto">{amount}</span>
      //   </div>
      //   <Button 
      //     variant="dark"
      //     onClick={()=>handlePlus(title, price)}
      //   >
      //     <FontAwesomeIcon icon={faPlus}/>
      //   </Button>
      // </InputGroup>
    // )
  // }
  return (
    <>
      {/* {addToCartToggle()} */}
      <InputGroup style={{width: '130px'}}>
        <Button 
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
          variant="dark"
          onClick={()=>dispatch(removeFromCart(title))}
        >
          X
        </Button>
    </>
  );
};

export default CartControlButtons;