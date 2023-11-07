import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-2">
            <Link to={'/'}>
                <h1>Kittens</h1>
            </Link>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Shop</Nav.Link>
                        <Nav.Link>Help</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={`/category/men's clothing`}>men's clothing</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/category/jewelery'>jewelery</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/category/electronics'>electronics</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/women's clothing`}>women's cloting</Link></NavDropdown.Item>
                        </NavDropdown>
                        <div className='cart-cartWidget'>
                            <Link to={'/cart'}>
                                <CartWidget />
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;