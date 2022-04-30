import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Navbars.css"

function Navbars() {
  return (

    <div className="header">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand className="head" href="#home" style={{ color: "#6C63FF" }}><strong>Mero Sathi</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" ><strong>Home</strong></Nav.Link>
              <Nav.Link href="#features" ><strong>Services</strong></Nav.Link>
              <Nav.Link href="#pricing" ><strong>About Us</strong></Nav.Link>
              <Nav.Link href="#home" ><strong>Contact Us</strong></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>

  )
}

export default Navbars
