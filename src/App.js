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

  let array1 = [];
  for (let i = 0; i < apiData.length; i++){
    array1.push(apiData[i].category)
  }
  const array2 = [...new Set(array1)]

  let categoryName = array2.map((category, i) => {
    let a = category.split(" ");
    let b = a.map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
    let c = b.join(' ');
    return c;
  })
  console.log(array2);

  return (
    <div className='main'>
      <Header categories={categoryName} />
      <Carousel />
      <Categories categories={categoryName} />
    </div>
  );
}

export default App;
