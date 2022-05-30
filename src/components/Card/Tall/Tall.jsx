import React from 'react'
import './Tall.css'

function Tall(props) {
  return (
    <div className='tall-wrapper' style={{gridColumnStart : props.columnStart , gridColumnEnd: props.columnEnds ,gridRowStart: props.rowStart, gridRowEnd: props.rowEnds}}>
        <img className='bg-img' src={props.image} alt="" />
        <img className='play-icon' src={props.icon} alt="" />
        <div className="overlay"></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Tall