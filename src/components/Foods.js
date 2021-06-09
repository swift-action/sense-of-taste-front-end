import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import FoodModal from '../components/FoodModal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FoodHeader from './foodHeader';
import FooterNew from './FooterNew';
import './food.css';

export class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [],
            server: process.env.REACT_APP_SERVER,
            displayFoodsCard: false,
            displayModal: false,
            mealName: "",
            maxCalories: ""

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
            displayModal: false
        })
    }
    setMealName = (e) => {
        this.setState({
            mealName: e.target.value
        })
    }

    setMaxCalories = (e) => {
        this.setState({
            maxCalories: e.target.value
        })
    }

    foodSearch = async (e) => {
        e.preventDefault();
        this.setState({
            displayModal: false,
        })
        let searchEvent = { mealName: this.state.mealName, maxCalories: this.state.maxCalories };
        let foodArr = await axios.get(`${this.state.server}/foodSearch`, { params: searchEvent });
        this.setState({
            food: foodArr.data,
            
        })
        console.log(this.state.food);
    }

    addToFav = async (idx) => {
        const obj = {
            email: this.props.auth0.user.email,
            name: this.state.food[idx].name,
            image: this.state.food[idx].image,
            ingredientLines: this.state.food[idx].ingredientLines,
            calories: this.state.food[idx].calories,
            totalTime: this.state.food[idx].totalTime
        }
        const favArr = await axios.post(`${this.state.server}/favFoods`, obj)

    }
    addToschedual = async (idx) => {
        const obj = {
            email: this.props.auth0.user.email,
            name: this.state.food[idx].name,
            image: this.state.food[idx].image,
            ingredientLines: this.state.food[idx].ingredientLines,
            calories: this.state.food[idx].calories,
            totalTime: this.state.food[idx].totalTime
        }
        const favArr = await axios.post(`${this.state.server}/schedual`, obj);
    }
    cheatMeal = async (idx) => {
        const obj = {
            email: this.props.auth0.user.email,
            name: this.state.food[idx].name,
            image: this.state.food[idx].image,
            ingredientLines: this.state.food[idx].ingredientLines,
            calories: this.state.food[idx].calories,
            totalTime: this.state.food[idx].totalTime
        }
        const favArr = await axios.post(`${this.state.server}/cheat`, obj);
    }




    render() {
        return (<>

            <div className='backGrundImage'  >
                <div className='heroImage'>
                    <FoodHeader />

                    <Button id='botStyle' className="button type1" onClick={this.handleShow}>SEARCH</Button></div>
                <FoodModal
                    showModal={this.state.displayModal}
                    hideModal={this.handleClose}
                    setMealName={this.setMealName}
                    setMaxCalories={this.setMaxCalories}
                    foodSearch={this.foodSearch}


                />
                <CardColumns className='cardColumeStyly' >
                    {this.state.displayFoodsCard &&

                        this.state.food.map((item, index) => {
                            return (

                                <Card className='cardStyly' style={{ width: '20rem' }}>
                                    <Card.Img className='img-card' variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title className='titleStyly' >{item.name}</Card.Title>
                                        <Card.Text className='scrollBar' >
                                            <p>Ingredient</p>
                                            <p>{item.ingredientLines}</p>
                                            <p>Calories</p>
                                            <p>{item.calories}</p>
                                            <p>Total Time</p>
                                            <p>{item.totalTime}</p>
                                        </Card.Text>
                                        <ButtonGroup id='positionB' aria-label="Basic example">
                                            <Button id='leftBotton' style={{ width: '100%' }} variant="outline-danger" size="sm" onClick={() => this.addToFav(index)} >  Add to favourite</Button><br></br>
                                            <Button id='middleBotton' style={{ width: '100%' }} variant="outline-danger" size="sm" onClick={() => this.addToschedual(index)} > Add To Schedual </Button>
                                            <Button id='rightBotton' style={{ width: '100%' }} variant="outline-danger" size="sm" onClick={() => this.cheatMeal(index)} >  Cheat Meal </Button>
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </CardColumns>
                <div className="emptyDiv">

                </div>
            {this.state.displayFoodsCard &&<div className="footerFoods">
                <FooterNew />
            </div>}
            </div >
        </>
        )
    }
}

export default withAuth0(Foods);
