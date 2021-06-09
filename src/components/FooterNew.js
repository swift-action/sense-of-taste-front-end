import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterNew.css';
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

class FooterNew extends React.Component {
  render() {
    return (
      <>

        <footer className="footer-distributed">

          <div className="footer-left">

            <h3>Sense Of<p id="taste">Taste</p></h3>

            <p className="footer-links">
              <Link className='fBar' to="/">Home</Link>
              <Link className='fBar' to="/Profile">Profile</Link>
              <Link className='fBar' to="/Foods">Recipes</Link>
              <Link className='fBar' to="/Fitness">Fitness</Link>
              <Link className='fBar' to="/AboutUs">About Us</Link>
            </p>

            <p className="footer-company-name">Sense Of Taste &copy; 2021</p>
          </div>

          <div className="footer-center">

            <div>
              <i className="fa fa-map-marker"></i>
              <p> Amman, Jordan</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+962-000-000-000</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">senseoftasteaction@gmail.com</a></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>About the team</span>
 Group of motivated junior software developers, start the website as the first step in our full-stack journey.
 </p>

            <div class="footer-icons">
              <FaTwitter className="fa" />
              <FaGithub className="fa" />
              <FaFacebook className="fa" />
              <FaLinkedin className="fa" />
              {/* <a href="#"><i class="fa fa-facebook"></i></a>
 <a href="#"><i class="fa fa-twitter"></i></a>
 <a href="#"><i class="fa fa-linkedin"></i></a>
 <a href="#"><i class="fa fa-github"></i></a> */}

            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default FooterNew;
