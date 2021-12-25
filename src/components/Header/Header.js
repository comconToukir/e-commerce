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
  color: 'white'
}

const Header = ({ categories }) => {
  return (
    <>
      <Navbar style={colorWhite} collapseOnSelect expand={false} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              // className="d-block w-100"
              style={{height: "40px", display: 'inline-block'}}
              src={process.env.PUBLIC_URL + '/icons/brand-logo.png'}
              alt="Brand Logo"
            />
            <h4 className="d-inline-block ms-3 text-align-center">E-COMMERCE</h4>
          </Navbar.Brand>

            <NavDropdown style={{color: 'white !important'}} className="ms-auto" title="Categories" menuVariant="dark" id="navbarScrollingDropdown">
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
          <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Cart</Offcanvas.Title>
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
