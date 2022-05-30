import React from 'react'
import './ExtraLarge.css'

function ExtraLarge(props) {
  return (
    <div className='extra-wrapper' style={{gridColumnStart : props.columnStart , gridColumnEnd: props.columnEnds ,gridRowStart: props.rowStart, gridRowEnd: props.rowEnds}}>
        <div className="img-wrapper">
          <img className='bg-img' src={props.image} alt="" />
          <img className='play-icon' src={props.icon} alt="" />
          <div className="overlay"></div>
          <p>{props.title}</p>
        </div>
    </div>
  )
}

export default ExtraLarge