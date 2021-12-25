import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import AddToCartButtons from '../AddToCartButtons/AddToCartButtons';
import './ProductCard.css';

const ProductCard = (props) => {
  const { title, price, category, description, image} = props.product;

  let item = [];
  if (props.cart === undefined || props.cart.length === 0) {
    item = [];
  } else {
    item = props.cart.filter(a => a.name === title);
  }

  let amount = 0;
  
  if (item === undefined || item.length === 0) {
    amount = 0;
  } else {
    amount = item[0].amount;
  }
  return (
    <Card style={{ width: '240px', margin: '5px'}} className="individual-card">
      <Card.Img style={{ height: '200px', padding: '7px', objectFit: 'scale-down'}} variant="top" src={image} />
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
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;