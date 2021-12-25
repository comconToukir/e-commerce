import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Electronics from '../Electronics/Electronics';
import Jewelery from '../Jewelery/Jewelery';
import MensClothing from '../MensClothing/MensClothing';
import WomensClothing from '../WomensClothing/WomensClothing';

const Categories = ({categories, uniqueCategoryName, apiData}) => {
  const [key, setKey] = useState('electronics');

  const cart = useSelector(state => {
    return state.cart;
  })
  // console.log(cart)

  // let eventName = categories.map((category) => {
  //   let a = category.split("'");
  //   let b = a.join("");
  //   let c = b.split(" ");
  //   let d = c.join("");
  //   return d;
  // })
  // console.log(uniqueCategoryName);
  // console.log(categories);
  // console.log(eventName);



  return (
      <Container className="pb-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >


          <Tab eventKey="electronics" title="Electronics">
            <Electronics uniqueCategoryName={uniqueCategoryName} apiData={apiData} cart={cart}/>
          </Tab>
          <Tab eventKey="jewelery" title="Jewelery">
            <Jewelery uniqueCategoryName={uniqueCategoryName} apiData={apiData} cart={cart} />
          </Tab>
          <Tab eventKey="mensClothing" title="MensClothing">
            <MensClothing uniqueCategoryName={uniqueCategoryName} apiData={apiData} cart={cart} />
          </Tab>
          <Tab eventKey="womensClothing" title="WomensClothing">
            <WomensClothing uniqueCategoryName={uniqueCategoryName} apiData={apiData} cart={cart} />
          </Tab>
        </Tabs>
      </Container>
  );
};

export default Categories;