import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomePage.css';
import Image from 'react-bootstrap/Image'

class HomePage extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>this home page</h1>

        {/* { <Image src='https://images.unsplash.com/photo-1484300681262-5cca666b0954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80'  fluid />} */}
        {/* <img src="./images/jill-heyer-toxlLueLNDs-unsplash.jpg" /> */}
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
    )
  }
}

export default HomePage;

