import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <ReactBootStrap.Navbar >
                    <ReactBootStrap.Navbar.Brand href="#home" style={{ color: "#6C63FF" }}><strong>Mero Sathi</strong></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="ml-auto">
                        <ReactBootStrap.Nav.Link href="#home" style={{ color: "black" }}><strong>Home</strong></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#features" style={{ color: "black" }}><strong>Services</strong></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#pricing" style={{ color: "black" }}><strong>About Us</strong></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#home" style={{ color: "black" }}><strong>Contact Us</strong></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar>
            </div>
        </div>
    )
}

export default Header
