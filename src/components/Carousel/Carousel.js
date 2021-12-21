import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import './Carousel.css';

const ProductCarousel = () => {
  return (
    <Carousel className="increased-legibility mt-3" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 increased-legibility"
          src={process.env.PUBLIC_URL + '/images/fashion-associations.png'}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 increased-legibility"
          src={process.env.PUBLIC_URL + '/images/health-associations.png'}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-content">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 increased-legibility"
          src={process.env.PUBLIC_URL + '/images/sports-associations.png'}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-content">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel;