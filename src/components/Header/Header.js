import { Container, Navbar, Nav, NavDropdown, Offcanvas} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const userIconStyle = {
  marginRight: '1.5em',
  marginLeft: '.5em',
  color: 'white'
}

const colorWhite = {
  color: 'white'
}

const Header = ({ categories }) => {
  // let array = categories.map((category, i) => {
  //   let a = category.split(" ");
  //   let b = a.map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
  //   let c = b.join(' ');
  //   return c;
  // })
  // console.log(categories);
  return (
    <>
      <Navbar style={colorWhite} collapseOnSelect expand={false} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

              {/* <Nav.Link className="ms-auto " href="#fashion">Fashion</Nav.Link>
              <Nav.Link href="#health">Health</Nav.Link>
              <Nav.Link href="#sport">Sport</Nav.Link>
              <Nav.Link href="#tech">Tech</Nav.Link> */}

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
                <p>place for cart</p>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
