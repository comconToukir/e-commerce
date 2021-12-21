import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = (props) => {
  const { title, price, category, description, image} = props.product;
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
        <Button variant="dark">
          Add To cart
          <FontAwesomeIcon style={{marginLeft: '7px'}} icon={faShoppingCart}/>
          </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;