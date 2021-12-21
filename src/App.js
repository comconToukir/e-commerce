import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ apiData, setApiData ] = useState([]);
  useEffect(() => {
    const apiLink = 'https://fakestoreapi.com/products';
    fetch(apiLink)
                .then(res=>res.json())
                .then(json=>console.log(json))
  }, [])
  

  return (
    <div className='main'>
      <Header />
      <Carousel />
      <Categories />
    </div>
  );
}

export default App;
