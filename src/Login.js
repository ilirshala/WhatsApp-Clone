import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = (e) =>{
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message)); 
    }
    return ( 
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/99/0b/7d/990b7d2c2904f8cd9bc884d3eed6d003.png" alt=""/>
            <div className="login__text">
                <h1>Sign In to Whatsapp</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In With Google
            </Button>
            
            </div>
        </div>
    )
}

export default Login
