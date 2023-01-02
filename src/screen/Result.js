import React, { Fragment } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./result.css";
export default function Result()
{
  return (
    
    <Fragment>
    <div className="nav-board">
        <ul>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
    <div class="container-block">
  <div class="myblock">
  <table>
    <thead>
      <tr>
        <th>Questions</th>
        <th>Time</th>
        <th>Passed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>0:16:23</td>
        <td>
          <div class="result-box">10/10</div>
        </td>
      </tr>
      </tbody>
      </table>
    </div>
</div>
</div>
    </Fragment>

    )
    
}
