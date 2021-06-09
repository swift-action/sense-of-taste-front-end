import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodHeader from './foodHeader';
import FooterNew from './FooterNew';
import './AboutUs.css'


class AboutUs extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className="aboutUsHeader">
          <FoodHeader  />
        </div>
        <div className="introduction">
          <h2>Meet Swift Action</h2>
        </div>
        <div>
        <section>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/80681836?v=4'/>
              </div>
              <div className='content-box'>
                <div>
                  <h2>Batool Ayyad</h2>
                  <p>Undefined Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/80675525?v=4' />

              </div>
              <div className='content-box'>
                <div>
                  <h2>Amro Albarham</h2>
                  <p>Axios Wizard Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/81561831?v=4' />

              </div>
              <div className='content-box'>
                <div>
                  <h2>Sokiyna</h2>
                  <p>Undefined Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/80677611?v=4' />

              </div>
              <div className='content-box'>
                <div>
                  <h2>Heba Essam</h2>
                  <p>Undefined Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/80677417?v=4' />

              </div>
              <div className='content-box'>
                <div>
                  <h2>Saeed Awwad</h2>
                  <p>NULL, Undefined, Not a function, Syntax Error Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='img-box'>
                <img src='https://avatars.githubusercontent.com/u/80688099?v=4' />

              </div>
              <div className='content-box'>
                <div>
                  <h2>Bara'ah Alomari</h2>
                  <p>Undefined Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <div className="footerAbout">
                <FooterNew />
            </div>
      </div>
    )
  }
}

export default AboutUs;