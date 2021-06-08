import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import './HomePage.css';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import NewHeader from './NewHeader';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Carousel className='hero'>
          <Carousel.Item interval={1000}>
            <img
              className="d-block-w-100" style={{height:'800px'}}
              src="https://images.unsplash.com/photo-1590234229790-b210b3dcd422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
              alt="First slide"
              />
            <Carousel.Caption className='caption'>
              <NewHeader/>
              {/* <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/> */}
  {/* <Button className='button'  variant="light">Sense</Button>  */}
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block-w-100" style={{height:'800px'}}
              src="https://images.unsplash.com/photo-1615375558203-d85d29ccf429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="Second slide"
            />
            <Carousel.Caption className='caption'>
            <NewHeader/>  
              {/* <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/>
  <Button className='button'  variant="light">Sense</Button> 
           

       
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block-w-100" style={{height:'800px'}}
              src="https://images.unsplash.com/photo-1562158074-d49fbeffcc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            />
      
            <Carousel.Caption className='caption'>
            <NewHeader/>
              {/* <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
              </>
              <br/>
  <Button className='button'  variant="light">Sense</Button> 
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
<div className='div-button'>
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <h1>About our website</h1>
      <h4>2021, Sense Of Taste</h4>
      <span class="minutes">Swift Action</span>
      <p class="type">Recipes, Fitness, Health</p>
    </div>
    <div class="movie_desc">
      <p class="text">
      Are you curious about your food calories and fat? <br/>Here we go,in our website you will find all meals ingridents details not only that also the calories and fat.
      </p>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>
</div>

<div className="containerBig">
    <div className="containerImg">
      <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" style={{height:'300px', width:'400px'}}/>
      <img src="https://images.unsplash.com/photo-1587841424505-4205a6e73ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" style={{height:'350px', width:'500px'}}/>
      <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" style={{height:'320px', width:'370px'}}/>
      <img src="https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80" alt="" style={{height:'270px', width:'600px'}}/>
    </div>
</div>

      </>
    )
  }
}

export default HomePage;
