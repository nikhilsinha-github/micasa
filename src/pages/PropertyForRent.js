import React from 'react'
import {SearchRent} from '../components/SearchRent'
import ad from '../assets/images/ad.png'
import '../styles/property_for_rent.css'
import {QuickLinks} from '../components/QuickLinks'
import {FeaturedProperties} from '../components/FeaturedProperties'
import {PopularCategories} from '../components/PopularCategories'
import advertisement from '../assets/images/avertisement.png'

export const PropertyForRent = () => {
  return (
    <div className="property-for-rent">
      <SearchRent/>
      <div className="ad">
        <div className="ad-left">
          <img src={ad} alt="" />
          <div className="ad-texts">
            <p className="ad-heading">Stay Safe , Stay Home</p>
            <p className="ad-description">Find listings with videos and 360 tours. View properties from the comfort of yourFind listings with videos and 360 tours. View properties from the comfort of your Find listings with videos and 360 tours. View properties </p>
            <p className="ad-red">Stay Safe , Stay Home</p>
          </div>
        </div>
        <div className="ad-right">
          <img src={advertisement} alt="" />
        </div>
      </div>
      <PopularCategories/>
      <FeaturedProperties/>
      <div className="quick-links">
        <QuickLinks/>
        <QuickLinks/>
        <QuickLinks/>
      </div>
    </div>
  )
}
