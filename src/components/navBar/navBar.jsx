import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from "../Carrito/Carrito"

 const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home">TecnoTienda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#hogar">Hogar</Nav.Link>
                        <Nav.Link href="#television">Television</Nav.Link>
                        <Nav.Link href="#audioVideo">Audio y Video</Nav.Link>
                        <Nav.Link href="#perifericos">Perifericos</Nav.Link>
                        
                    </Nav>
                    
                    </Navbar.Collapse>
                    <Carrito/> 
            </Container>
        </Navbar>
             
           
        </>
    )
 }

 export default NavBar
