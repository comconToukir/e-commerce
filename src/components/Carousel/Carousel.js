import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import './Carousel.css';

const ProductCarousel = () => {
  return (
    <Carousel className="mb-3" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (1).jfif'}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (2).jfif'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (3).jfif'}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (4).jfif'}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (1).jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/carousel-image (2).jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel;