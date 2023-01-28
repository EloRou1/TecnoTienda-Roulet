import * as React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link , NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




 const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    
                    <NavLink to="/">TecnoTienda</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="btn btn-dark" to="/categoria/Hogar">Hogar</NavLink>
                        <NavLink className="btn btn-dark"to="/categoria/Television">Television</NavLink>
                        <NavLink className="btn btn-dark" to="/categoria/AudioYVideo">Audio y video</NavLink>
                        <NavLink className="btn btn-dark" to="/categoria/Perifericos">Perifericos</NavLink>
                    </Nav>
                    <Nav>
                        <Link to="/carrito">🛒</Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
             
           
        </>
    )
 }

 export default NavBar
