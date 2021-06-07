import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
// import './HomePage.css';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
import { CardColumns } from 'react-bootstrap';
import './Fitness.css';




class Fitness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER,
      fitness: [],
      displayCard: false
    }
  }

  componentDidMount = async () => {
    const exerciseData = await axios.get(`${this.state.server}/fitness`, { params: { email: this.props.auth0.user.email } })

    this.setState({
      fitness: exerciseData.data,
      displayCard: true
    })
  }




  render() {
    return (
      <div className='fitness'>
        {/* <Jumbotron> */}
        <h1>Fitness</h1>
        

       
        <CardColumns className='columnsfitness'>
          {this.state.displayCard &&
            this.state.fitness.map((item, index) => {
              return (
                <Card className='Cardfitness' style={{ width: '18rem' }}>

                  <Card.Img variant="top" className='imagefitness' src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.repeat}</Card.Text>

                  </Card.Body>
                </Card>
              )
            })

          }

        </CardColumns>


        {/* </Jumbotron> */}
      </div>
    )
  }
}

export default withAuth0(Fitness);