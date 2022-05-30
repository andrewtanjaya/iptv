import React from 'react'
import './Small.css'

function Small(props) {
  return (
    <div className='small-wrapper'>
        <img src={props.icon} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default Small