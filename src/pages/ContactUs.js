import React from 'react'
import '../styles/contact_us.css'
import contactUsBG from '../assets/images/contact_us_bg.png'

export const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus-forms">
        <h2>How can we help You ?</h2>
        <input type="search" name="" id="" placeholder="Search Property" />
        <div className="form-and-articles">
          <form action="" className="contactus-form">
            <p className="form-description">Accurately selecting your specific issue from the drop-down lists below will enable us to direct your message to the right deparment. Once you select your issue, you will be able to contact us.</p>
            <label htmlFor="fullname" className="input-label">Full Name <span>*</span>
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="fullname" className="input-label">Email Address <span>*</span>
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="fullname" className="input-label">Phone Number <span>*</span>
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="fullname" className="input-label">Description <span>*</span>
              <input type="text" name="" id="description" />
            </label>
            <label htmlFor="fullname" className="input-label">Attachments
            <input type="submit" value="Upload" />
            </label>
            <input type="submit" value="Submit" />
            <p><span>*</span> Mandatorary Fields</p>
          </form>
          <div className="article">
            <div className="trending-articles-heading">
              <p>Trending Arcticles</p>
            </div>
            <div className="trending-articles">
              <ul>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">What is VAT and what how does it affect my relationship with dubizzle? </a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">What is VAT and what how does it affect my relationship with dubizzle? </a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">What is VAT and what how does it affect my relationship with dubizzle? </a>
                </li>
                <li>
                  <a href="/">4 Things you need to know about VAT</a>
                </li>
                <li>
                  <a href="/">What is VAT and what how does it affect my relationship with dubizzle? </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={contactUsBG} alt="" />
    </div>
  )
}
