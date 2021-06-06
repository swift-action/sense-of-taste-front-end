import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import './HomePage.css';

class AboutUs extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>AboutUs</h1>
        <p>
          This is a collection of my favorite books
        </p>
        
      </Jumbotron>
    )
  }
}

export default AboutUs;