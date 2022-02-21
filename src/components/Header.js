import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
      <Navbar.Brand href="inicio">
        <h3>MadiSport</h3>
      </Navbar.Brand>
      <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="¿Que estas buscando?"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">MadiSport</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3" >
            <Nav.Link href="Inicio" >Inicio</Nav.Link>
            <Nav.Link href="Sobre Nosotros">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Nuestros trabajos" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="Calzas">Calzas</NavDropdown.Item>
              <NavDropdown.Item href="Remeras-Sublimadas">Remeras Sublimadas</NavDropdown.Item>
              <NavDropdown.Item href="Gorras-Sublimadas">Gorras Sublimadas</NavDropdown.Item>
              <NavDropdown.Item href="Remeras-por-mayor">Remeras por mayor</NavDropdown.Item>
              <NavDropdown.Item href="Otros">Otros tipos de trabajos con sublimacion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Header