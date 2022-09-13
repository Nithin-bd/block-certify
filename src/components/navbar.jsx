import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";

const Auth = () =>{
  const user = localStorage.getItem('admin')
  if(user){
      return true
  }
  else{
      return false
  }
}
class Navhead extends Component {
  state = {};
  Logout = event =>{
    event.preventDefault();
    localStorage.removeItem('admin')
    localStorage.removeItem('loggedin')
    window.location.reload(false);
    window.location.href = "/";
}
  
  render() {
    const user = Auth()
    return (
      <Navbar className="bar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand mb={0} href="/">
          e-Ceritify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
          { user && <>
          <Nav.Item className="mt-2 mr-2 ">
            <Link to="/"></Link>
            </Nav.Item>
            <Nav.Item className="mt-2 mr-2 ">
              <Link to="/add">Generate</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/reg">Register</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/ipfs">IPFS</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/verify">Verify</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 mr-3">
              <Link to="/view">View Certificate</Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <button className="button" onClick={this.Logout}>Logout</button>
            </Nav.Item>
            </>
          }
          {
            !user && <>
             <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/verify">Verify</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/reg">Register</Link>
            </Nav.Item>
            </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navhead;
