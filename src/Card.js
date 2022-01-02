import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div className = 'grid-item'>
            <div className="card">
                    <img className = 'card-image' src={require('.//timer.jpg')} alt="nice"/>
                    <div className="card-content">
                        <h1 className="card-header">Timer</h1>
                        <p className="card-text">
                            A simple timer that counts down from a given time.
                        </p>
                        <button className="card-btn">
                            Click
                        </button>
                    </div>
            </div>
            
        </div>
    )
}

export default Card
