import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Container } from 'react-bootstrap';

const WomensClothing = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const link = 'https://fakestoreapi.com/products/category/womensclothing';
    fetch(link)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  console.log(products)
  return (
    <Container className='d-flex flex-wrap justify-content-around'>
        {
          products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </Container>
  );
};

export default WomensClothing;