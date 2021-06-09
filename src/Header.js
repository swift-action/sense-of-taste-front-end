import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import LogoutButton from './components/LogoutButton';


class Header extends React.Component {
  render() {
    return(
      <>
       <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand> Sense of test</Navbar.Brand>
           <Link className='navBar' to="/">Home</Link>
           <Link className='navBar' to="/Profile">Profile</Link>
           <Link className='navBar' to="/Foods">Recipes</Link>
           <Link className='navBar' to="/Fitness">Fitness</Link>
           <Link className='navBar' to="/AboutUs">About Us</Link>
           <LogoutButton className='logout-button'  /> 
        </Navbar>
</>
    )
  }
}

export default Header;
