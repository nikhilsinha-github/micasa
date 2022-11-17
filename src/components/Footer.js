import React from 'react'
import '../styles/footer.css'
import downloadAppsImage from '../assets/images/download_apps.png'
import logo from '../assets/svg/logo.svg'

export const Footer = () => {
  return (
      <div className="footer">
          <div className="real-estate-agent-section">
                <div className="real-estate-agent-section-text">
                    <h1>Want To Become A Real Estate Agent ?</h1>
                    <p>We’ll help you to grow your career and growth.</p>
                </div>
                <button className="sign-up-today" type="submit">Sign Up Today</button>
          </div>
          <div className="quick-links">
              <div className="company-details">
                <div className="logo-and-name">
                    <img src={logo} alt="" />
                    <p className="company-name">Uday</p>
                </div>
                <p className="company-place">Dubai, UAE</p>
              </div>
              <div className="about">
                  <h3>About</h3>
                  <div className="links">
                      <ul>
                          <li>About Us</li>
                          <li>Contact Us</li>
                          <li>Terms & Condition</li>
                      </ul>
                  </div>
              </div>
              <div className="about">
                  <h3>More Information</h3>
                  <div className="links">
                      <ul>
                          <li>All properties</li>
                          <li>House for Sale</li>
                          <li>House for Rent</li>
                      </ul>
                  </div>
              </div>
              <div className="about">
                  <h3>News</h3>
                  <div className="links">
                      <ul>
                          <li>Latest News</li>
                          <li>House Architecture</li>
                          <li>House Design</li>
                          <li>Building Materials</li>
                      </ul>
                  </div>
              </div>
              <div className="download-apps">
                  <h3>Download Apps</h3>
                  <img src={downloadAppsImage} alt="" />
              </div>
          </div>
          <div className="subscription">
              <h3>Subscribe</h3>
              <div className="subscription-box">
                <form>
                    <input type="text" name="name" placeholder="Enter your Email"/>
                    <input type="submit" value="Subscribe" />
                </form>
              </div>
          </div>
      </div>
  )
}
