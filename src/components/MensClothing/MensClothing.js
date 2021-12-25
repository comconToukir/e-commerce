import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Container } from 'react-bootstrap';

const MensClothing = ({apiData, cart}) => {
  let productList = apiData.filter((data) => data.category === "men's clothing")
  
  return (
    <Container className='d-flex flex-wrap justify-content-around'>
        {
          productList.map(product => <ProductCard key={product.id} product={product} cart={cart}></ProductCard>)
        }
    </Container>
  );
};

export default MensClothing;