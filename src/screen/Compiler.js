import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./hamburger";
import "./compiler.css";
export default function Compiler()
{
  return (
    
    <div class="wrapper">
    <div class="section">
        <div class="top_navbar">
            <div class="hamburger">
                <a href="/">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
        </div>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
        {/* <script src="src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script> */}
    </div>
    <div class="sidebar">
       <div class="profile">
        <p>Python Evaluator</p>
       </div>
       <ul>
        <li>
            <a href="/" class="active">
                <span class="item">ALL</span>
            </a>
        </li>
        <li>
            <a href="/">
                <span class="item">Question 1</span>
            </a>
        </li>
        <li>
            <a href="/">
                <span class="item">Question 2</span>
            </a>
        </li>
        <li>
            <a href="/">
                <span class="item">Question 3</span>
            </a>
        </li>
    </ul>
</div> 
    <div class="row">
      <div class="column quest1">
        <div>
          <diV class="quest-box">
              <h5>Question 1</h5>
              <p>Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) such that:
                
                </p>
          </diV>
        </div>
        <diV class="quest-box">
          <div class="quest-content">
            <h5>Sample Input 1</h5>
            <div>
              <p>nums = [1,2,3,4,5]
                  k = 2</p>
            </div>
            <h5>Sample Output 1</h5>
            <div>
              <p>7 Pairs - (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4)</p>
            </div>
          </div>
        </diV>
        <diV class="quest-box">
          <div class="quest-content">
            <h5>Sample Input 2</h5>
            <div>
              <p>nums = [1,2,3,4], k = 5
              </p>
            </div>
            <h5>Sample Output 2</h5>
            <div>
              <p>0 There does not exist any pair of indices whose corresponding product is divisible by 5.</p>
            </div>
          </div>
        </diV>
        <diV class="quest-box">
            <h5>Constraints:</h5>
            <ul>
              <li></li>
              <li></li>
            </ul>
        </diV>
      </div>
      <div class="column" >
        <center id="icon-time">
          <i class="fas fa-tachometer-alt" id="icon-space"></i>
          <h id="head">5:00</h>
        </center>
        <div class="container">
              <pre id="editor">
            </pre>
          </div>
          <div class="col">
            <div id="button">
            <button class="btn btn-success">Run Code</button>
            <br />
            <button class="btn btn-success">Submit</button>
            <br />
            <pre id="ans"></pre>
            </div>
          </div>
        </div>
        {/* <script src="texteditor.js"></script>
    <script>
      window.onload = function () {
          codeEditor();
      };
    </script> */}
        {/* <script>
      var hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", ()=>{
          document.querySelector("body").classList.toggle("active");
      })
    </script> */}
    <script src="hamburger.js"></script>
        </div>
      </div>
    // </div>
   

    )
    
}


