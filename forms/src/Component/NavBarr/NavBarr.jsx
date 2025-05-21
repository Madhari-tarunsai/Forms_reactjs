import React from 'react'
import './Navbarr.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { VscSignIn } from "react-icons/vsc"
import { MdLogin } from "react-icons/md"
import { Link } from 'react-router-dom'

const NavBarr = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary">
        <Container fluid>
          <Navbar.Brand href="#" style={{color:'white'}}>DashBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-links"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/register' className="nav-link-custom">Register <MdLogin /></Link>
              <Link to='/login' className="nav-link-custom">Login <VscSignIn /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarr
