import React from 'react'
import '../styles/popular_category_card.css'
import featuredPropertyCard from '../assets/images/featured_property.png'

export const PopularCategoryCard = () => {
  return (
    <div className="popular-property-card">
        <img src={featuredPropertyCard} alt="" />
        <p className="property-name">Name of Property</p>
    </div>
  )
}
