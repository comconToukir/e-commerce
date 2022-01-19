import React from 'react';
import { connect } from 'react-redux';
import { Card, Badge } from 'react-bootstrap';
import AddToCartButtons from '../AddToCartButtons/AddToCartButtons';
import './ProductCard.css';

const ProductCard = (props) => {
  const {cart} = props;
  const { title, price, category, description, image} = props.product;

  let item = [];
  if (cart === undefined || cart.length === 0) {
    item = [];
  } else {
    item = cart.filter(a => a.name === title);
  }

  let amount;
  
  if (item === undefined || item.length === 0) {
    amount = null;
  } else {
    amount = item[0].amount;
  }
  return (
    <Card style={{ width: '240px', margin: '5px'}} className="individual-card trans">
      <Card.Img style={{ height: '200px', padding: '7px', objectFit: 'scale-down'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title className="truncate-overflow-2">{title}</Card.Title>
        <Badge className="category-badge" bg="secondary">{category}</Badge>
        <Card.Text className="truncate-overflow-3">
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: 'white', borderTop: 'none'}}>
        <h6>Price: ${price}</h6>
      </Card.Footer>
      <Card.Footer className="mb-2" style={{ backgroundColor: 'white', border: 'none' }}>
        <AddToCartButtons product={props.product} cart={cart} amount={amount} />
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
// export default ProductCard;