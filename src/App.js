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
                .then(json=>setApiData(json))
  }, []);

  let dummyArray = [];
  for (let i = 0; i < apiData.length; i++){
    dummyArray.push(apiData[i].category)
  }
  const categories = [...new Set(dummyArray)]

  return (
    <div className='main'>
      <Header categories={categories} />
      <Carousel />
      <Categories categories={categories} />
    </div>
  );
}

export default App;
