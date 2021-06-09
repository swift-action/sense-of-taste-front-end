import { Link } from "react-router-dom";
import LogoutButton from './components/LogoutButton';
import './NewHeader.css';
import React from 'react';


class NewHeader extends React.Component {
    render() {
      return(
        <>
        <div class="nav-area">
        <Link className='navBar'  to="/">Home</Link>
           <Link className='navBar' to="/Profile">Profile</Link>
           <Link className='navBar' to="/Foods">Recipes</Link>
           <Link className='navBar' to="/Fitness">Fitness</Link>
           <Link className='navBar' to="/AboutUs">About Us</Link>
           <LogoutButton id='logout-button' /> 
        </div>
        
        </>
    )
  }
}
export default NewHeader;