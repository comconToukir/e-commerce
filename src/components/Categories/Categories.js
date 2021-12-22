import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Electronics from '../Electronics/Electronics';
import Jewelery from '../Jewelery/Jewelery';
import MensClothing from '../MensClothing/MensClothing';
import WomensClothing from '../WomensClothing/WomensClothing';

const Categories = ({categories, uniqueCategoryName, apiData}) => {
  const [key, setKey] = useState('electronics');

  let eventName = categories.map((category) => {
    let a = category.split("'");
    let b = a.join("");
    let c = b.split(" ");
    let d = c.join("");
    return d;
  })
  console.log(uniqueCategoryName);
  console.log(categories);
  console.log(eventName);



  return (
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >


          <Tab eventKey="electronics" title="Electronics">
            <Electronics uniqueCategoryName={uniqueCategoryName} apiData={apiData} />
          </Tab>
          <Tab eventKey="jewelery" title="Jewelery">
            <Jewelery uniqueCategoryName={uniqueCategoryName} apiData={apiData} />
          </Tab>
          <Tab eventKey="mensClothing" title="MensClothing">
            <MensClothing uniqueCategoryName={uniqueCategoryName} apiData={apiData} />
          </Tab>
          <Tab eventKey="womensClothing" title="WomensClothing">
            <WomensClothing uniqueCategoryName={uniqueCategoryName} apiData={apiData} />
          </Tab>
        </Tabs>
      </Container>
  );
};

export default Categories;