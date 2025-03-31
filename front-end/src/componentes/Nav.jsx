import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import {Navbar, Nav, Container} from 'react-bootstrap'; 

const nav = () =>{
    return(
       <Navbar expand='lg' bg='brown' variant='dark' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">Milanese Maison</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Início</Nav.Link>
                        <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/Sobre_Nos">Sobre Nós</Nav.Link>
                        <Nav.Link as={Link} to="/Pedidos">Pedidos</Nav.Link>
                        <Nav.Link as={Link} to="/Contatos">Contatos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
       </Navbar>
      
    );
}

export default nav;