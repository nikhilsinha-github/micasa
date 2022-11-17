import React from 'react'
import '../styles/find_your_home.css'
import rentOrBuy from '../assets/images/rent_or_buy.png'
import home2 from '../assets/images/home2.png'
import video from '../assets/images/video.png'

export const FindYourHome = () => {
  return (
    <div className="landing-screen">
        <div className="find-your-home">
            <div className="find-your-home-text">
                <h1>Find your home that suits you.</h1>
                <p>We provide a complete service for the sale, purchase or rental of real estate</p>
                <input type="submit" value="watch Apartments" />
                <div className="short-details">
                    <div className="apartment">
                        <h1>100+</h1>
                        <h2>Apartment</h2>
                    </div>
                    <div className="apartment">
                        <h1>50+</h1>
                        <h2>Agents</h2>
                    </div>
                    <img src={video} alt="" className="video"/>
                </div>
            </div>
            <div className="find-your-home-images">
                <img src={rentOrBuy} alt="" className="rent-or-buy"/>
                <img src={home2} alt="" className="home2"/>
            </div>
        </div>
        <div className="search-items">
            
        </div>
    </div>
  )
}
