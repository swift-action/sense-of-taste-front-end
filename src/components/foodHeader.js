import { Link } from "react-router-dom";
import './foodHeader.css';
import React from 'react';
import LogoutButton from './LogoutButton';


class FoodHeader extends React.Component {
    render() {
      return(
        <>
        <div class="navig-area">
        <Link className='navigBar' id='home' to="/">Home</Link>
           <Link className='navigBar' to="/Profile">Profile</Link>
           <Link className='navigBar' to="/Foods">Recipes</Link>
           <Link className='navigBar' to="/Fitness">Fitness</Link>
           <Link className='navigBar' to="/AboutUs">About Us</Link>
        <LogoutButton className="logingOut" />
      
        </div>
        </>
    )
  }
}
export default FoodHeader;