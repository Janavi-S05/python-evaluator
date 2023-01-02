import React, { Fragment } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./leaderboard.css";

export default function Leaderboard()
{

    const navigate= useNavigate();

    const submitLogin=async(e)=>{
      e.preventDefault();
      
          navigate("/");
          
    }
   
  return (

      <Fragment>
        <div className="leaderboard-body">
        <div className="nav-board">
        <ul>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
        </div>
  <div className="board-container">
  <div className="myblock1">
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th colspan="2">Name</th>
        <th>Finish Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
          <div>
          <img
        src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
        alt="car" style={{width:40,borderRadius: 35}}/>
          <p>Lani</p>
          </div>
        </td>
        <td>0:16:23</td>
      </tr>
      </tbody>
      </table>
    </div>
    </div>
    </div>
    </Fragment>
    )
    
}


