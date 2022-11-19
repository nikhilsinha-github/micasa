import React from 'react'
import '../styles/explore-properties.css'
import {PropertyCard} from './PropertyCard'

export const ExploreProperties = () => {
  return (
    <div className="explore-properties">
      <h2>Explore Good Places</h2>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
      <div className="properties">
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
      </div>
      <div className="show-more">
        <input type="submit" value="Show More" />
      </div>
    </div>
  )
}
