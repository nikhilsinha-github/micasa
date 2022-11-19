import React from 'react'
import '../styles/property_card.css'
import property from '../assets/images/property.png'
import { FaStar } from 'react-icons/fa'
import bed from '../assets/images/bed.png'
import washroom from '../assets/images/washroom.png'
import area from '../assets/images/area.png'

export const PropertyCard = () => {
  return (
    <div className="property-card">
        <div className="image-and-type">
            <img src={property} alt="" />
            <div className="type">
                <p>For Sale</p>
            </div>
        </div>
        <div className="property-details">
            <div className="name-price">
                <p className="property-name">Name of property</p>
                <p className="price">INR 200000</p>
            </div>
            <div className="rating">
                <FaStar margin="0" padding="0"/>
                <FaStar margin="0" padding="0"/>
                <FaStar margin="0" padding="0"/>
                <FaStar margin="0" padding="0"/>
                <FaStar margin="0" padding="0"/>
                <p>(5 Reviews)</p>
            </div>
            <div className="facilities">
                <div className="facility-box">
                    <img src={bed} alt="" />
                    <p>2 Beds</p>
                </div>
                <div className="facility-box">
                    <img src={washroom} alt="" />
                    <p>4 Washrooms</p>
                </div>
                <div className="facility-box">
                    <img src={area} alt="" />
                    <p>Area</p>
                </div>
            </div>
            <hr />
            <p className="location">Location of the property</p>
        </div>
    </div>
  )
}
