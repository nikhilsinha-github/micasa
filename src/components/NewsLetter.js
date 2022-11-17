import React from 'react'
import letterImage from '../assets/images/letter.png'
import '../styles/newsletter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <img src={letterImage} alt="" />
        <div className="input-email">
            <p className="subscribe">Subscribe to</p>
            <p className="our-newsletter">Our Newsletter!</p>
            <p className="subscription-body">Subscribe to our newsletter and Stay Updated</p>
            <input type="email" name="email" id="" placeholder="Enter your email address"/>
            <input type="submit" value="Submit" />
        </div>
    </div>
  )
}
