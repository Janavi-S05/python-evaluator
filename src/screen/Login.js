import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./login.css"

export default function Login()
{

    const navigate= useNavigate();

    const submitLogin=async(e)=>{
      e.preventDefault();
      
          navigate("/home");
          
    }
   
  return (

    <div className="login-container">
    <form className="form-1" action="home.js">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input type="email" name="email" id="email"  required/>
      <label for="password">Password</label>
      <input type="password" name="password" id="password"  required/>
      <span>Forgot Password?</span>
      <button onClick={()=>{navigate("/home")}}>Login</button>
    </form>
  </div>
     
    )
    
}


