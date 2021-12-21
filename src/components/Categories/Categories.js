import React, {useState, useEffect} from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Electronics from '../Electronics/Electronics';
import Jewelery from '../Jewelery/Jewelery';
import MensClothing from '../MensClothing/MensClothing';
import WomensClothing from '../WomensClothing/WomensClothing';

const Categories = () => {
  const [key, setKey] = useState('electronics');

  return (
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="electronics" title="Electronics">
            <Electronics />
          </Tab>
          <Tab eventKey="jewelery" title="Jewelery">
            <Jewelery />
          </Tab>
          <Tab eventKey="mensClothing" title="MensClothing">
            <MensClothing />
          </Tab>
          <Tab eventKey="womensClothing" title="WomensClothing">
            <WomensClothing />
          </Tab>
        </Tabs>
      </Container>
  );
};

export default Categories;