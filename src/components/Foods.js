import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './food.css';
import { CardColumns } from 'react-bootstrap';
import FoodModal from '../components/FoodModal';

export class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [],
            server: process.env.REACT_APP_SERVER,
            displayFoodsCard: false,
            displayModal: false,
            mealName:"",
            maxCalories:""

        }

    }
    componentDidMount = async () => {
        const food = await axios.get(`${this.state.server}/foods`, { params: { email: this.props.auth0.user.email } })
        console.log(food);
        this.setState({
            food: food.data,
            displayFoodsCard: true,
        })
    }

    handleShow = () => {
        this.setState({
            displayModal: true
        })
    }

    handleClose = () => {
        this.setState({
            displayModal:false
        })
    }
    setMealName = (e) => {
        this.setState({
            mealName: e.target.value 
        })
    }

    setMaxCalories = (e) =>{
        this.setState({
            maxCalories:e.target.value
        })
    }

    foodSearch = async (e) => {
        e.preventDefault();
        let searchEvent = {mealName: this.state.mealName, maxCalories:this.state.maxCalories};
        let foodArr = await axios.get(`${this.state.server}/foodSearch`, {params: searchEvent});
        this.setState({
            food:foodArr.data
        })
        console.log(this.state.food);
    }
    
    addToFav= async (idx)=>{
        const obj = {
            email:this.props.auth0.user.email,
            name: this.state.food[idx].name,
            image:this.state.food[idx].image,
            ingredientLines:this.state.food[idx].ingredientLines,
            calories:this.state.food[idx].calories,
            totalTime:this.state.food[idx].totalTime
        }
        const favArr = await axios.post(`${this.state.server}/favFoods`,obj)
       
    }
    addToschedual=async (idx)=>{
        const obj = {
            email:this.props.auth0.user.email,
            name: this.state.food[idx].name,
            image:this.state.food[idx].image,
            ingredientLines:this.state.food[idx].ingredientLines,
            calories:this.state.food[idx].calories,
            totalTime:this.state.food[idx].totalTime
        }    
        const favArr = await axios.post(`${this.state.server}/schedual`,obj);
    }




    render() {
        return (
            <>
                <div className='heroImage'><Button variant="outline-danger" onClick={this.handleShow}>SEARCH</Button></div>
                <FoodModal 
                showModal={this.state.displayModal}
                hideModal={this.handleClose}
                setMealName={this.setMealName}
                setMaxCalories={this.setMaxCalories}
                foodSearch={this.foodSearch}

                
                />
                <CardColumns>
                    {this.state.displayFoodsCard &&

                        this.state.food.map((item, index) => {
                            return (

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
                                        <Button onClick={() => this.addToFav(index)} variant="primary">Add to favourite</Button>
                                        <Button onClick={() => this.addToschedual(index)} variant="primary">Add To Schedual </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </CardColumns>
            </>
        )
    }
}

export default withAuth0(Foods);
