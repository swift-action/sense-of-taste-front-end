import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './login.css';
import LoginButton from './components/LoginButton';

class Login extends React.Component {
  render() {
    return(
      <div className='login-page'>
      <Card className='cardlogin' border="danger"  style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
         { <LoginButton/>}
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Login;
