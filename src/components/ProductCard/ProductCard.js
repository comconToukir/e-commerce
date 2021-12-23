import React, { useState } from 'react';
import { Card, Button, Badge, InputGroup } from 'react-bootstrap';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, addToCart } from '../../state/action-creators/index';

const ProductCard = (props) => {
  const { title, price, category, description, image} = props.product;
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handlePlus = (title1, price1) => {
    setAmount(amount + 1);
    dispatch(increaseAmount(title1, price1))
  }

  const handleMinus = (title1, price1) => {
    setAmount(amount - 1);
    dispatch(decreaseAmount(title1, price1))
  }


  const handleAddToCart = (title1, price1) => {
    dispatch(addToCart(title1, price1))
    handlePlus(title1, price1);
  }

  // const singleItem = {
  //   title: `${title}`,
  //   price: `${price}`
  // }

  const addToCartToggle = () => {
    return ( amount < 1 ? 
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
    <Card style={{ width: '240px', margin: '3px'}}>
      <Card.Img style={{ height: '200px', objectFit: 'scale-down'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title className="truncate-overflow">{title}</Card.Title>
        <Badge className="category-badge" bg="secondary">{category}</Badge>
        <Card.Text className="truncate-overflow">
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: 'white', borderTop: 'none'}}>
        <h6>Price: ${price}</h6>
      </Card.Footer>
      <Card.Footer  style={{ backgroundColor: 'white', border: 'none'}}>
        {addToCartToggle()}
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;