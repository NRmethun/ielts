import React from 'react'

import {Navbar,Nav,NavDropdown} from 'react-bootstrap' 
import {Link}  from 'react-router-dom' 

function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/home">IELTSbook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      
      <NavDropdown title="Practice" id="basic-nav-dropdown">
        <NavDropdown.Item href="/listening">Listening</NavDropdown.Item>
        <NavDropdown.Item href="/reading">Reading</NavDropdown.Item>
        <NavDropdown.Item href="writting">Writting</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="speaking">Speaking</NavDropdown.Item>
      </NavDropdown> 

      <Nav.Link href="#link">Blogs</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>



        </div>
    )
}

export default Navigation
