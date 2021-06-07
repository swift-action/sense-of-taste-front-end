import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cheatArr: [],
            favArr: [],
            schedual: [],
            display: false,
        }

    }
    componentDidMount = async () => {
        let info = {
            email: this.props.auth0.user.email
        }
        let cheat = await axios.get(`${process.env.REACT_APP_SERVER}/cheatsmeal`, { params: info });
        // let fav = await axios.get(`${this.state.server}/favmeals`,{params:info});
        // let schedual = await axios.get(`${this.state.server}/schedualmeals`,{params:info});

        this.setState({
            cheatArr: cheat.data,
            //    favArr:fav,
            //    schedual:schedual,
            display: true
        })

    }
    
    deleteCheat = async()=>{
        let info = {
            email:this.props.auth0.user.email
        }
        let index = 0;
        let empty = await axios.delete(`${process.env.REACT_APP_SERVER}/cheatsmeal/${index}`,{params:info});
        console.log(empty.data);
       this.setState({
           cheatArr:[empty.data],
           display:true
       })
    }

    render() {
        const { user } = this.props.auth0;
        return (
            <>
                <div>
                    <img src={user.picture} alt={user.name} />
                    <div>Hello {user.name}</div>
                    <div>Email: {user.email}</div>
                </div>
                <div>
                    {this.state.display && <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.cheatArr[0].image} alt={this.state.cheatArr[0].name}/>
                        <Card.Body>
                            <Card.Title>{this.state.cheatArr[0].name}</Card.Title>
                            <Card.Text>
                                <p>Ingredient</p>
                                <p>{this.state.cheatArr[0].ingredientLines}</p>
                                <p>Calories</p>
                                <p>{this.state.cheatArr[0].calories}</p>
                                <p>Total Time</p>
                                <p>{this.state.cheatArr[0].totalTime}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={this.deleteCheat}>Delete</Button>
                        </Card.Body>
                    </Card>}
                </div>
            </>
        );
    }
}
export default withAuth0(Profile);