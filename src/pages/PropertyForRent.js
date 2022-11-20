import React from 'react'
import {SearchRent} from '../components/SearchRent'
import ad from '../assets/images/ad.png'
import '../styles/property_for_rent.css'
import {QuickLinks} from '../components/QuickLinks'

export const PropertyForRent = () => {
  return (
    <div className="property-for-rent">
      <SearchRent/>
      <div className="ad">
        <img src={ad} alt="" />
      </div>
      <QuickLinks/>
    </div>
  )
}
