import React, { useState } from 'react'
import '../styles/listing.css'
import { PropertyCard } from '../components/PropertyCard'
import { Dropdown } from '../components/Dropdown'

export const Listing = () => {
  const [selected, setSelected] = useState("Dubai")
  return (
    <div className="listing">
      <div className="search-box">
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="price-range-selection">
          <div className="cover">
            <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
          </div>
          <div className="cover">
            <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
          </div>
        </div>
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="cover">
          <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
        </div>
        <div className="price-range-selection">
          <div className="cover">
            <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
          </div>
          <div className="cover">
            <Dropdown className="dropdown" selected={selected} setSelected={setSelected}/>
          </div>
        </div>
        <p className="advanced-search">ADVANCED SEARCH</p>
        <label htmlFor="search-check-amenity">
          <input type="checkbox" name="search-check-amenity" id="search-check-amenity" />
          Wifi
        </label>
        <label htmlFor="search-check-amenity">
          <input type="checkbox" name="search-check-amenity" id="search-check-amenity" />
          Wifi
        </label>
        <label htmlFor="search-check-amenity">
          <input type="checkbox" name="search-check-amenity" id="search-check-amenity" />
          Wifi
        </label>
        <label htmlFor="search-check-amenity">
          <input type="checkbox" name="search-check-amenity" id="search-check-amenity" />
          Wifi
        </label>
        <button type="submit">Find New Home</button>
      </div>
      <div className="results">
        <div className="found-and-sorting">
          <p>Found 1-12 of 19 Results</p>
          <div className="sorting"></div>
        </div>
        <div className="properties">
          {Array.apply(0,Array(15)).map(function(x,i){
            return <PropertyCard/>
          })}
        </div>
      </div>
    </div>
  )
}
