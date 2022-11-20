import React, { useState } from 'react'
import '../styles/search_rent.css'
import propertyForRent from '../assets/images/property_for_rent_bg.png'
import {Dropdown} from './Dropdown'

export const SearchRent = () => {
    const [selected, setSelected] = useState("Dubai")
  return (
    <div className="search-rent">
        <div className="search-text-and-tools">
            <h2>Rent Properties with Micasa</h2>
            <div className="rent-categories">
                <input type="button" value="Residential Units for Rent" />
                <input type="button" value="Commercial for Rent" />
                <input type="button" value="Rooms for Rent (flatmates)" />
                <input type="button" value="Short Term (Monthly)" />
                <input type="button" value="Short Term (Daily)" />
            </div>
            <div className="search-bar">
                <div className="headings">
                    <div className="city">City</div>
                    <div className="location">Location</div>
                    <div className="property-type">Property Type</div>
                    <div className="price-range">Price Range</div>
                    <div className="beds">Beds</div>
                </div>
                <div className="search-filters">
                    <div className="location-box">
                        <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
                        <div className="line"></div>
                        <input type="text" name="" id="" placeholder="Enter Neighborhood or Building" />
                    </div>
                    <div className="type-box">
                        <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
                    </div>
                    <div className="type-box">
                        <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
                    </div>
                    <div className="type-box">
                        <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
                    </div>
                    <div className="type-box">
                        <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
                    </div>
                    <input type="button" value="Search" />
                </div>
                <p>Reset Filters</p>
            </div>
        </div>
        <img src={propertyForRent} alt=""/>
    </div>
  )
}
