import React from 'react'
import '../styles/popular_areas.css'
import {PopularAreaCard} from './PopularAreaCard'

export const PopularAreas = () => {
  return (
    <div className="popular-areas">
      <p className="heading">Popular Areas in Dubai</p>
      <div className="property-list">
        <div className="properties">
            <PopularAreaCard/>
            <PopularAreaCard/>
            <PopularAreaCard/>
            <PopularAreaCard/>
            <PopularAreaCard/>
            <PopularAreaCard/>
        </div>
      </div>
    </div>
  )
}
