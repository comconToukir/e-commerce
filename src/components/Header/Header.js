import { Container, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Cart from '../Cart/Cart';

const userIconStyle = {
  marginRight: '1.5em',
  marginLeft: '.5em',
  color: 'white'
}

const colorWhite = {
  color: 'white',
  position: 'sticky'
}

const Header = ({ categories, cart }) => {
  const itemCount = cart.length;
  console.log(itemCount);
  return (
    <>
      <Navbar style={colorWhite} collapseOnSelect expand={false} bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              // className="d-block w-100"
              style={{height: "40px", display: 'inline-block'}}
              src={process.env.PUBLIC_URL + '/icons/brand-logo.png'}
              alt="Brand Logo"
            />
            <h4 className="d-none d-sm-inline-block ms-3 text-align-center">E-COMMERCE</h4>
          </Navbar.Brand>

          <NavDropdown className="ms-auto category-dropdown" title="Categories" menuVariant="dark" id="navbarScrollingDropdown">
            {
              categories.map((cat)=> <NavDropdown.Item href={"#"+cat}>{cat}</NavDropdown.Item>)
            }
          </NavDropdown>

          <FontAwesomeIcon style={userIconStyle} icon={faUser}/>

          <Navbar.Toggle >
            <span className="ms-auto" aria-controls="offcanvasNavbar">
              <FontAwesomeIcon style={colorWhite} icon={faShoppingCart}/>
            </span>
          </Navbar.Toggle>
            <span className="item-count">{itemCount}</span>
          <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" className="d-block w-100 lightblue-bg">Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Cart></Cart>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
