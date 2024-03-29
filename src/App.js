import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ apiData, setApiData ] = useState([]);
  // const [itemCount, setItemCount ] = useState(0);
  useEffect(() => {
    const apiLink = 'https://fakestoreapi.com/products';
    fetch(apiLink)
                .then(res=>res.json())
                .then(json=>setApiData(json))
  }, []);

  const cart = useSelector(state => {
    // setItemCount(state.cart.length);
    return state.cart;
  })

  // const itemCount = cart.length;

  let array1 = [];
  for (let i = 0; i < apiData.length; i++){
    array1.push(apiData[i].category)
  }
  const uniqueCategoryName = [...new Set(array1)]

  let categoryName = uniqueCategoryName.map((category) => {
    let a = category.split(" ");
    let b = a.map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
    let c = b.join(' ');
    return c;
  })
  
  // let eventName = uniqueCategoryName.map((category) => {
  //   let a = category.split(" ");
  //   let b = a.map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
  //   let c = b.join('');
  //   let d = c.split("'");
  //   let e = d.join("");
  //   return e;
  // })

  return (
    <div className='main'>
      <Header 
        categories={categoryName} 
        cart={cart}
        // itemCount={itemCount}
      />
      <Carousel />
      <Categories 
        categories={categoryName} 
        uniqueCategoryName={uniqueCategoryName}
        apiData={apiData}
        cart={cart}
      />
    </div>
  );
}

export default App;
