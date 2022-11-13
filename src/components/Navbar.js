import React from 'react';
// import { GrMenu } from 'react-icons/gr';
import '../styles/navbar.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { App } from '../App';
import { PropertyForRent } from '../pages/PropertyForRent';
import {Listing} from '../pages/Listing'
import {Features} from '../pages/Features'
import {ContactUs} from '../pages/ContactUs'
import {AboutUs} from '../pages/AboutUs'
import {Help} from '../pages/Help'
import {SignUp} from '../pages/SignUp'
import {NoPage} from '../pages/NoPage'


export const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo-and-menu">
        <div className="logo">
          <h1 className="text-white">UDAY</h1>
        </div>
        <ul className="menu-expanded">
          <li>
            <NavLink 
              to="/" 
              activeClass="active"
              spy={true}
              smooth={true}>Home</NavLink>
          </li>
          <li>
            <NavLink
              to="propertyforrent"
              activeClass="active"
              spy={true}
              smooth={true}>Property for Rent</NavLink>
          </li>
          <li>
            <NavLink 
              to="listing" 
              activeClass="active"
              spy={true}
              smooth={true}>Listing</NavLink>
          </li>
          <li>
            <NavLink 
              to="features" 
              activeClass="active"
              spy={true}
              smooth={true}>Features</NavLink>
          </li>
          <li>
            <NavLink 
              to="contactus" 
              activeClass="active"
              spy={true}
              smooth={true}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink 
              to="aboutus" 
              activeClass="active"
              spy={true}
              smooth={true}>About Us</NavLink>
          </li>
          <li>
            <NavLink 
              to="help" 
              activeClass="active"
              spy={true}
              smooth={true}>Help</NavLink>
          </li>
          <li>
            <NavLink 
              to="signup" 
              activeClass="active"
              spy={true}
              smooth={true}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
      <div className="other-menu">
          <ul className="add-property">
            <li>
              <NavLink 
                to="/" 
                activeClass="active"
                spy={true}
                smooth={true}>Add Property</NavLink>
            </li>
          </ul>
          <button className="red-button" type="submit">Sign In</button>
      </div>
      {/* <div className="menu-collapsed">
        <GrMenu />
      </div> */}
      {/* <Routes>
          <Route path="/" element={<App />}>
          <Route exact path="propertyforrent" element={<PropertyForRent />} />
          <Route exact path="listing" element={<Listing />} />
          <Route exact path="features" element={<Features />} />
          <Route exact path="contactus" element={<ContactUs />} />
          <Route exact path="aboutus" element={<AboutUs />} />
          <Route exact path="help" element={<Help />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes> */}
    </section>
  )
}
