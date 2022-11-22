import React, {useRef} from 'react'
import '../styles/featured_properties.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import {FeaturedPropertyCard} from './FeaturedPropertyCard'

export const FeaturedProperties = () => {

    const featuredProperties = useRef();

    function handleScrollLeft() {
        featuredProperties.current.scrollLeft -=500;
        console.log("left");
    }

    function handleScrollRight() {
        featuredProperties.current.scrollLeft +=500;
        console.log("right");
    }

  return (
    <div className="featured-properties">
      <p className="heading">Featured Properties</p>
      <div className="property-list">
          <div className="properties" ref={featuredProperties}>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
              <FeaturedPropertyCard/>
          </div>
          <div className="toggle-buttons">
              <div className="toggle-button-left">
                <BsArrowLeftCircleFill onClick={handleScrollLeft} color="#4F746C" size={50} style={{background: 'white', borderRadius: '100%'}}/>
              </div>
              <div className="toggle-button-right">
                <BsArrowRightCircleFill onClick={handleScrollRight} color="#4F746C" size={50} style={{background: 'white', borderRadius: '100%'}}/>
              </div>
          </div>
      </div>
    </div>
  )
}
