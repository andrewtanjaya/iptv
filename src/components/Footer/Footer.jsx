import React from 'react'
import './Footer.css'
import billingIcon from '../../assets/view_billing2.png'
import messageIcon from '../../assets/Group 6.png'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="footer-left">
            <img className='billing-icon' src={billingIcon} alt="" />
            <div className="message-icon">
                <img className='msg-icon' src={messageIcon} alt="" />
                <span>5</span>
            </div>
        </div>
        <div className="footer-center">
            <p>Welcome to KAI Hotel & Resort Bali. Our well trained staffs eagerly await to serve and provide you with a truly memorable stay at our hotel.</p>
        </div>
        <div className="footer-right">
            <span>HELP!</span>
        </div>
    </div>
  )
}

export default Footer