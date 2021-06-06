import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'food.css';

export class Foods extends Component {
    constructor(props){
        super(props);
        this.state={
            food:[],
            server:process.env.REACT_SERVER,
            displayFoodsCard:false,

        }

    }
    componentDidMount = async () => {
        const food = await axios.get(`${this.state.server}/foods`,{ params: { email: this.props.auth0.user.email } })
        this.setState({
            food:food.data,
            displayFoodsCard:true,
        })
    }
    render() {
        return (
            <>
            <div className={heroImage}><Button variant="outline-danger">SEARCH</Button></div>
            
            {this.state.displayFoodsCard &&
            this.state.food.map((item,index)=>{
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <p>Ingredient</p>
                            <p>{item.ingredientLines}</p>
                            <p>Calories</p>
                            <p>{item.calories}</p>
                            <p>Total Time</p>
                            <p>{item.totalTime}</p>
                        </Card.Text>
                        <Button onClick={() => this.addFoodHandler(index)} variant="primary">Add to favourite</Button>
                        <Button onClick={() => this.handledeleteShow(index)} variant="primary">Delete </Button>
                    </Card.Body>
                </Card>
                )
            })
            }
                
            </>
        )
    }
}

export default withAuth0(Foods);
