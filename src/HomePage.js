import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import './HomePage.css';
import Badge from 'react-bootstrap/Badge'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Header from './Header';

class HomePage extends React.Component {
  render() {
    return (




      <>

        <Carousel className='hero'>
          <Carousel.Item interval={1000}>
         
            <img
              className="d-block-w-100"
              src="https://images.unsplash.com/photo-1570115115003-6dd0b570d378?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption className='caption'>
              <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/>
  <Button className='button'  variant="light">Sense</Button> 
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
        
            <img
              className="d-block-w-100"
              src="https://images.unsplash.com/photo-1598161940988-fdf0db05a455?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxmb29kJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />
            <Carousel.Caption className='caption'>
  
              <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/>
  <Button className='button'  variant="light">Sense</Button> 
           

       
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block-w-100"
              src="https://images.unsplash.com/photo-1501841700699-85ad9c9122be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxmb29kJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />
      
            <Carousel.Caption className='caption'>
              <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/>
  <Button className='button'  variant="light">Sense</Button> 
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
<div className='div-button'>
  
  <p className='paragraph'> Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  </p>
  <img className='image-button' src="https://images.unsplash.com/photo-1598795769324-084a66f8e05e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2QlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="asdf"/>
</div>

        
      </>


    )
  }
}

export default HomePage;
