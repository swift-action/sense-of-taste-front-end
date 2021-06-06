import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomePage.css';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav'
class HomePage extends React.Component {
  render() {
    return (
      <>
      <div className='hero' >
      <Nav className='navbarsh' defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
      <h3 style={{color:'white'}}>Become Your Own Chef </h3>
      </div>
      <h1>hsdvndsvsdjvjndvndj</h1>
      </>
    )
  }
}

export default HomePage;

