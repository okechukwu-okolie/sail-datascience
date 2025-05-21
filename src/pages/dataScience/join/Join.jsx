import React from 'react'
import './Join.css'
import JoinCard from '../../../component/joinCard/JoinCard'
import image1 from '/joincardImg1.png'

const Join = () => {
  return (
    <div className='join-container'>
        <div className="join-content">
            <h1 className="join-title">Why You Should Join?</h1>
            <p className="join-paragraph">Unlock the power of data to solve real-world problems <br />
            and launch a future-proof career.</p>
        </div>
        <div className="join-cards">
            <JoinCard 
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets Work on hands-on projects with real data sets'/>
            <JoinCard 
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets Work on hands-on projects with real data sets'/>
            <JoinCard 
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets Work on hands-on projects with real data sets'/>
            <JoinCard 
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets Work on hands-on projects with real data sets'/>
            <JoinCard 
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets Work on hands-on projects with real data sets'/>
        </div>

    </div>
  )
}

export default Join