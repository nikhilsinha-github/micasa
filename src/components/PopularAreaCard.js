import React from 'react'
import '../styles/popular_area_card.css'
import popularArea1 from '../assets/images/popular_area1.png'

export const PopularAreaCard = () => {
  return (
    <div className="popular-area-card">
        <div className="details">
          <p>Area Name</p>
          <p>Features of the area in 50-60 words.</p>
        </div>
        <img src={popularArea1} alt="" />
    </div>
  )
}
