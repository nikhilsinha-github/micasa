import React from 'react'
import '../styles/featured_property_card.css'
import featuredPropertyCard from '../assets/images/featured_property.png'

export const FeaturedPropertyCard = () => {
  return (
    <div className="featured-property-card">
        <img src={featuredPropertyCard} alt="" />
        <p className="price">30,000 AED</p>
        <p className="description">Features of the Property in 50-60 words continuition.</p>
        <div className="name-of-property">
            <p className="property-name">Name of Property</p>
        </div>
    </div>
  )
}
