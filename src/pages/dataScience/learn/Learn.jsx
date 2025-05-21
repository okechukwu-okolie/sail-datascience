import React from 'react'
import './Learn.css'
import LearnCard from '../../../component/learnCard/LearnCard'
const Learn = () => {
  return (
    <div className='learn-container'>
        <div className="learn-text">
            <h1 className="learn-title">What You'll Learn</h1>
            <p className="learn-paragraph">Master the essential tools, techniques and mindset to turn raw <br /> data into powerful insights and career-ready projects</p>
        </div>
        <div className="learn-cards">
            <LearnCard/>
            <LearnCard/>
            <LearnCard/>
            <LearnCard/>
            <LearnCard/>
            <LearnCard/>
        </div>
    </div>
  )
}

export default Learn