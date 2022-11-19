import React from 'react'
import time from "../assets/images/247.png"
import '../styles/reason_card.css'

export const ReasonCard = (props) => {
  return (
    <div className="reason-card">
        <img src={props.img} alt="" />
        <p className="consultation">{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
}
