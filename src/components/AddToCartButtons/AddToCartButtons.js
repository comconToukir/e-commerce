import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart, removeFromCart } from '../../state/action-creators/index';

const AddToCartButtons = ( props ) => {
  const {amount, increaseAmount, decreaseAmount, addToCart, removeFromCart} = props;
  const { title, price } = props.product;

  useEffect(() => {
    if (amount === 0) {
      removeFromCart(title);
    }
  }, [amount, title, removeFromCart]);

  const handlePlus = (title1, price1) => {
    increaseAmount(title1, price1);
  }

  const handleMinus = (title1, price1) => {
    if (amount > 0) {
      decreaseAmount(title1, price1);
    } else {
      removeFromCart(title1);
    }
  }

  const handleAddToCart = (title1, price1) => {
    addToCart(title1, price1)
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
      <div className="d-flex">
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

        <Button 
          className="ms-auto d-grid"
          variant="dark"
          onClick={()=>removeFromCart(title)}
          >
            <img
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


const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  increaseAmount: increaseAmount,
  decreaseAmount: decreaseAmount,
  addToCart: addToCart,
  removeFromCart: removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButtons);