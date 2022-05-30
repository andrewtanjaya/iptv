import React from 'react'
import './Wide.css'

function Wide(props) {
  return (
    <div className='wide-wrapper' style={{gridColumnStart : props.start, gridColumnEnd : props.ends}}>
        <img src={props.image} alt="" />
        <div className="overlay"></div>
        <p>{props.title}</p>
    </div>
  )
}

export default Wide