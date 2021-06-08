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
      <div className='holepage'>
      {/* <div className='fitness'> */}
        {/* <Jumbotron> */}
        {/* <h1>Fitness</h1> */}



        {/* <CardColumns className='cardcolumn' > */}
          {this.state.displayCard &&
            this.state.fitness.map((item, index) => {
              return (
                // <Card className='Cardfitness' style={{ width: '18rem' }}>

                //   <Card.Img variant="top" className='imagefitness' src={item.image} />
                //   <Card.Body>
                //     <Card.Title>{item.name}</Card.Title>
                //     <Card.Text>{item.description}</Card.Text>
                //     <Card.Text>{item.repeat}</Card.Text>

                //   </Card.Body>
                // </Card>
            <>
                  <div className="fitness_container">
                    <div className="post">
                      <div className="header_post">
                        <img src={item.image} alt=""/>
        </div>

                        <div className="body_post">
                          <div className="post_content">

                            <h1>{item.name}</h1>
                            <p>{item.description}</p>

                            <div className="container_infos">
                              <div className="postedBy">
                                <span>author</span>
                        swift action
                    </div>

                              <div className="container_tags">
                                <span>repeat</span>
                                <p>{item.repeat}</p>
                                <div className="tags">
                                  {/* <ul>
                                    <li>design</li>
                                    <li>front end</li>
                                  </ul> */}
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* <a href={item.link} target="_blank"><footer>
                      <div class="texto">
                        <span>
                          <i class="fab fa-youtube"></i>
             watch on youtube</span>
                      </div>
                    </footer>
                    </a> */}
                    </>
              )
            })
            
          }

        {/* </CardColumns> */}


        {/* </Jumbotron> */ }
      {/* </div> */}
          </div>
    )
  }
}

export default withAuth0(Fitness);