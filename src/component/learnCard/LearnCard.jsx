import React from 'react'
import './LearnCard.css'
import learn_img from  '/joincardImg1.png'
const LearnCard = () => {
  return (
    <div className='learn-card-container'>
        <div className="learn-card-text">
            <h1 className="learn-card-title">
            Data Analytic & <br />Visualisation
            </h1>
            <p className="learn-card-paragraph">
                transform numbers into clear, <br /> impactful visuals using Excel, <br />PowerBI and Tableau.
            </p>
        </div>
            <img className="learn-card-image" src={learn_img} alt="" />
        {/* <div className="learn-card-image">
        </div> */}
    </div>
  )
}

export default LearnCard