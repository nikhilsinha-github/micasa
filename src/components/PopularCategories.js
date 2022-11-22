import React, {useRef} from 'react'
import '../styles/popular_categories.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import { PopularCategoryCard } from './PopularCategoryCard'
import rentAd from '../assets/images/rent_ad.png'

export const PopularCategories = () => {
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
    <div className="popular-categories">
            <p className="heading">Popular Categories</p>
        <div className="property-list">
          <div className="properties" ref={featuredProperties}>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
              <PopularCategoryCard/>
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
        <div className="popular-rent-ad">
          <img src={rentAd} alt="" style={{width: '100%'}}/>  
          <p className="popular-rent-ad-text">Properties for Rent Advertisement</p>
        </div>
    </div>
  )
}
