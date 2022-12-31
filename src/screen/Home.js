import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
export default function Home()
{

    const navigate= useNavigate();
    return (
    <div className="home-body">
    <div className="home-content">
        <div className="heading">
            <h2>Instructions</h2>
        </div>
        <div className="home-box">
            <h3>Duration: 90mins</h3>
            <h3>Questions: 3</h3>
        </div>
        <div className="home-instruction">
            <ul>
                <h4>About the test </h4>
                <li>Language supported for the test is Python.</li>
                <li>Each submission will be tested based on the private test cases.</li>
                <li>The test will be auto-submitted when the time exceeds.</li>
                <li>The results will auto-appear once test is over.</li>
            </ul>
        </div>
        <div className="home-instruction">
            <ul>
                <h4>Before the test </h4>
                <li>Make sure you have stable internet connection.</li>
                <li>Ensure the device is fully charged.</li>
            </ul>
        </div>
        <div className="home-instruction">
            <ul>
                <h4>During the test</h4>
                <li>Keep up with the time.</li>
                <li>Avoid switching tabs on web.</li>
            </ul>
        </div>
        <Button className="btn-danger" onClick={()=>{navigate("/quest")}}>Start</Button>{' '}

    </div>
    </div>
    )
    
}

