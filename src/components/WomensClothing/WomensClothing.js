import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Container } from 'react-bootstrap';

const WomensClothing = ({apiData, cart}) => {
  let productList = apiData.filter((data) => data.category === "women's clothing")
  
  return (
    <Container className='d-flex flex-wrap justify-content-around'>
        {
          productList.map(product => <ProductCard key={product.id} product={product} cart={cart}></ProductCard>)
        }
    </Container>
  );
};

export default WomensClothing;