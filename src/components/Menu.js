import React from 'react'
import { Container, Nav, Navbar,} from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav >
      <Navbar.Brand href="#Contacto">CONTACTANOS</Navbar.Brand>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Menu;