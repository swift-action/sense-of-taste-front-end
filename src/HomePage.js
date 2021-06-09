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
import FooterNew from './components/FooterNew';
import LoginButton from './components/LoginButton';
import image2 from './images/pepper2.jpg'

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Carousel className='hero'>
          <Carousel.Item interval={1000}>
            <img
              className="d-block-w-100" style={{ height: '800px' }}
              src="https://images.unsplash.com/photo-1590234229790-b210b3dcd422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
              alt="First slide"
            />
            <Carousel.Caption className='caption'>
              <NewHeader />
              <div className="writings">
                <h1>Sense of Taste</h1> 
                <h2>The First Wealth Is Health</h2>              
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block-w-100" style={{ height: '800px' }}
              src="https://expertphotography.com/wp-content/uploads/2018/07/dark-food-photography-still-life.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='caption'>
              <NewHeader />
              <div className="writings">
              <h2>Food Is Not Just Eating Energy Its An Experience</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block-w-100" style={{ height: '800px' }}
              src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569945393177-ffe6dc868c0d%3Fixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1951%26q%3D80"
            />

            <Carousel.Caption className='caption'>
              <NewHeader />
              <div className="writings">
               <h2>You Dont Have To Eat Less You Just Have To Eat Right</h2>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="logingin">
         <LoginButton />
        </div>
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
                  Are you curious about your food calories and fat? <br />Here we go,in our website you will find all meals ingridents details not only that also the calories and fat.
      </p>
              </div>
            </div>
            <div class="blur_back bright_back"></div>
          </div>
        </div>
        <div className="containerBig">
          <div className="containerImg">
            <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" style={{ height: '300px', width: '400px' }} />
            <img src="https://images.unsplash.com/photo-1587841424505-4205a6e73ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" style={{ height: '350px', width: '500px' }} />
            <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" style={{ height: '320px', width: '370px' }} />
            <img src="https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80" alt="" style={{ height: '270px', width: '600px' }} />
          </div>

        </div>
        <div className="footerHome">
          <FooterNew />
        </div>
      </>
    )
  }
}

export default HomePage;
