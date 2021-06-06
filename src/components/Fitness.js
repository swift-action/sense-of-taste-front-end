import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import './HomePage.css';

class Fitness extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>Fitness</h1>
        <p>
          This is a collection of my favorite books
        </p>
        
      </Jumbotron>
    )
  }
}

export default Fitness;