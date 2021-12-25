import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import AddToCartButtons from '../AddToCartButtons/AddToCartButtons';
// import { useSelector } from 'react-redux';
import './ProductCard.css';


const ProductCard = (props) => {
  // const [amount, setAmount] = useState(0);

  const { title, price, category, description, image} = props.product;
  console.log(props.cart)
  // const { cart } = props.cart;
  // console.log(cart);

  let item = [];
  if (props.cart === undefined || props.cart.length === 0) {
    item = [];
  } else {
    item = props.cart.filter(a => a.name === title);
  }

  let amount = 0;
  
  if (item === undefined || item.length === 0) {
    amount = 0;
    // setAmount(0);
  } else {
    amount = item[0].amount;
    // setAmount(item[0].amount);
  }
  console.log(amount);

  // const item = useSelector(state => {state.cart.filter(a => a.name === title)});


  // if (item === undefined || item.length === 0) {
  //   setAmount(0)
  //   // return amount
  // } else {
  //   setAmount(item[0].amount)
  //   // return amount
  // }
  
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
        <AddToCartButtons product={props.product} cart={props.cart} amount={amount} />
        {/* <AddToCartButtons title={title} price={price} /> */}
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;