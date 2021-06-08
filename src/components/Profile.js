import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CardColumns } from 'react-bootstrap';
import './Profile.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cheatArr: [],
            favArr: [],
            schedual: [],
            display: false,
            show:'block',
        }

    }
    componentDidMount = async () => {
        let info = {
            email: this.props.auth0.user.email
        }
        let cheat = await axios.get(`${process.env.REACT_APP_SERVER}/cheatsmeal`, { params: info });
        let fav = await axios.get(`${process.env.REACT_APP_SERVER}/favmeals`, { params: info });
        let schedual = await axios.get(`${process.env.REACT_APP_SERVER}/schedualmeals`, { params: info });
        if (cheat.data.length == 0) {
            cheat.data = [{
                name: 'go pick a cheat meal',
                image: 'https://geo-static.traxsource.com/files/images/36bf18cd2e6e946b0eb7b3ab2790e6ec.jpg',
                ingredientLines: 'why havent you picked a cheat meal yet',
                calories: '',
                totalTime: 'dude...DUUUUDE',
            }]
        }
        console.log(this.props.auth0.user)
        this.setState({
            cheatArr: cheat.data,
            favArr: fav.data,
            schedual: schedual.data,
            display: true,
        })

    }

    deleteCheat = async () => {
        let info = {
            email: this.props.auth0.user.email
        }
        let index = 0;
        let empty = await axios.delete(`${process.env.REACT_APP_SERVER}/cheatsmeal/${index}`, { params: info });
        console.log(empty.data);
        this.setState({
            cheatArr: empty.data,
            display: true,
            show:"none",
        })
    }

    deleteschedual = async (index) => {
        let info = {
            email: this.props.auth0.user.email
        }
        let empty = await axios.delete(`${process.env.REACT_APP_SERVER}/schedualdelete/${index}`, { params: info });
        console.log(empty.data);
        this.setState({
            schedual: empty.data,

        })
    }

    deleteFav = async (index) => {
        let info = {
            email: this.props.auth0.user.email
        }
        let empty = await axios.delete(`${process.env.REACT_APP_SERVER}/favdelete/${index}`, { params: info });
        console.log(empty.data);
        this.setState({
            favArr: empty.data
        })
    }

    render() {
        const { user } = this.props.auth0;
        return (
            <>
                <div className="allProfile">
                    <div id="profileInfo">
                        <img src={user.picture} alt={user.name} />
                        <div id="userName">{user.name}</div>
                        <div>{user.email}</div>
                    </div>

                    <div>
                        {this.state.display != 0 && <div id="cheatMeal"  >
                            <img className="cheatFoodImage" variant="top" src={this.state.cheatArr[0].image} alt={this.state.cheatArr[0].name} />
                            <h2 id="cheatHeader">Cheat Meal</h2>
                            <h2>{this.state.cheatArr[0].name}</h2>
                            <p>Ingredients:</p>
                            <p className="overly">{this.state.cheatArr[0].ingredientLines}</p>
                            <div>   
                            <p>Calories</p>
                            <p>{Math.floor(this.state.cheatArr[0].calories)}</p>
                            </div>
                            <div>
                            <p>Total Time</p>
                            <p> {this.state.cheatArr[0].totalTime}</p>
                            </div>
                            <Button variant="outline-danger" onClick={this.deleteCheat} display={this.state.show}>Delete</Button>
                            

                        </div>}
                    </div>
                    <fieldset id='schedule'>
                        <legend>Today's schedule:</legend>

                        {<div className="profileColumns">
                            {this.state.schedual.length != 0 &&

                                <CardColumns >
                                    {this.state.schedual.map((item, idx) => {
                                        return (
                                            <Card className="shafaff" key={idx}>
                                                <Card.Img className="foodImage" variant="top" src={item.image} alt={item.name} />
                                                <Card.Body>
                                                    <Card.Title className="profileFoodTitle">{item.name}</Card.Title>
                                                    <Card.Text className="CardDescription">
                                                        <p>Ingredient</p>
                                                        <p>{item.ingredientLines}</p>
                                                        <p>Calories</p>
                                                        <p>{item.calories}</p>
                                                        <p>Total Time</p>
                                                        <p>{item.totalTime}</p>
                                                    </Card.Text>
                                                    <Button variant="outline-danger" onClick={() => this.deleteschedual(idx)}>Delete</Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </CardColumns>

                            }
                        </div>}
                    </fieldset>
                    <fieldset id='fav'>
                        <legend>My Favorites:</legend>
                        {this.state.favArr.length != 0 && <div className="profileColumns2">
                            {this.state.display &&
                                <CardColumns>
                                    {this.state.favArr.map((item, idx) => {
                                        return (
                                            <Card className="shafaff" key={idx}>
                                                <Card.Img className="foodImage" variant="top" src={item.image} alt={item.name} />
                                                <Card.Body>
                                                    <Card.Title className="profileFoodTitle">{item.name}</Card.Title>
                                                    <Card.Text className="CardDescription">
                                                        <p>Ingredient</p>
                                                        <p>{item.ingredientLines}</p>
                                                        <p>Calories</p>
                                                        <p>{item.calories}</p>
                                                        <p>Total Time</p>
                                                        <p>{item.totalTime}</p>
                                                    </Card.Text>
                                                    <Button variant="outline-danger" onClick={() => this.deleteFav(idx)}>Delete</Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </CardColumns>
                            }
                        </div>}
                    </fieldset>
                </div>
            </>
        );
    }
}
export default withAuth0(Profile);