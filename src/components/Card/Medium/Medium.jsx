import React from 'react'
import './Medium.css'

function Medium(props) {
  return (
      
    <div className='medium-wrapper' style={{gridColumnStart : props.start, gridColumnEnd : props.ends}}>
        <img src={props.image} alt="" />
        <div className="overlay"></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Medium