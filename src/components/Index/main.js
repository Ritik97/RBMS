import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../resuable/button'
import './main.css'

function Index() {
    return (
        <>
            <div className="container">
                <div className="center-container">
                    <h1 className='card-title'>Employee Details</h1>
                    <div className="info-container">
                        <div className="info-title">
                            <h2>UserID: </h2>
                            <h2>Username: </h2>
                            <h2>Email: </h2>
                            <h2>Designation: </h2>
                        </div>
                        <div className="info-values">
                            <h2> &nbsp;&nbsp; 001</h2>
                            <h2> &nbsp;&nbsp; Ritik91</h2>
                            <h2> &nbsp;&nbsp; ritiksinha91@gmail.com</h2>
                            <h2> &nbsp;&nbsp; Full Stack Developer</h2>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <Button buttonStyle="btn--primary">View My Documents</Button>
            &nbsp;&nbsp;
            <Button buttonStyle="btn--primary">Mark My Attendence</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
