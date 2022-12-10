import React from 'react'
import '../styles/product_details.css'
import detailedImage from '../assets/images/property_details.png'
import companyProfile from '../assets/images/company_profile.png'
import propertyRoom from '../assets/images/property_room.png'
import bed from '../assets/svg/bed.svg'
import bath from '../assets/svg/bath.svg'
import area from '../assets/svg/area.svg'
import furnished from '../assets/svg/furnished.svg'
import location from '../assets/svg/location.svg'
import tick from '../assets/svg/tick.svg'
import GoogleMapReact from 'google-map-react'

export const ProductDetails = () => {
    const roomImages = [propertyRoom, propertyRoom, propertyRoom, propertyRoom];
    // const API_KEY = "AIzaSyAlMJl_iurNhKB3GuB_mvmorT6AXVq1WTU";
    const API_KEY = "";
    return (
        <div className="product-details">
            <div className="breadcrump">
                <p>UAE {'>'} Dubai {'>'} The Villa </p>
                <p>Reference ID: 3374-Vl-R-0389</p>
            </div>
            <div className="detailed-images-and-details">
                <img src={detailedImage} alt="" />
                <div className="company-details">
                    <div className="company-pic"></div>
                    <img src={companyProfile} alt="" />
                    <p className="company-name">Company Name</p>
                    <hr />
                    <div className="number-details">
                        <div className="heading">
                            <p>RERA Registration Number:</p>
                            <p>DED License Number:</p>
                        </div>
                        <div className="value">
                            <p>12345</p>
                            <p>12345</p>
                        </div>
                    </div>
                    <div className="book-chat-buttons">
                        <button className="book-button">Book Now</button>
                        <button className="chat-button">Chat with Human</button>
                    </div>
                </div>
            </div>
            <div className="property-further-details">
                <div className="further-details-left">
                    <div className="room-images">
                        {Array.apply(0, Array(9)).map(function (x, i) {
                            return <img src={propertyRoom} alt="" />;
                        })}
                    </div>
                    <div className="price">
                        <p>AED <span className="price-amount">300,000</span> Yearly</p>
                    </div>
                    <div className="amenities">
                        <img src={bed} alt="" />
                        <p>5 beds</p>
                        <img src={bath} alt="" />
                        <p>5 Baths</p>
                        <img src={area} alt="" />
                        <p>6,138 SqFt</p>
                        <img src={furnished} alt="" />
                        <p>Furnished</p>
                    </div>
                    <div className="location">
                        <img src={location} alt="" />
                        <p>Hacienda, The Villa</p>
                    </div>
                    <hr />
                    <p className="property-name-type">LAVISH STANDALONE VILLA | FULLY FURNISHED</p>
                    {Array.apply(0, Array(4)).map(function (x, i) {
                        return <div className="description-in-details">
                            <p className="details-heading">KEY FEATURES</p>
                            {Array.apply(0, Array(5)).map(function (x, i) {
                                return <p className="details-details">Five beds all ensuit</p>;
                            })}
                        </div>;
                    })}
                    <div className="hide-description">Hide full description</div>
                    <hr />
                    <div className="amenities-text">
                        <p className="further-details-heading">Amenities</p>
                        <div className="amenities-tiles">
                            {Array.apply(0, Array(5)).map(function (x, i) {
                                return <div className="amenities-tile">
                                    <img src={tick} alt="" />
                                    <p>Maids Room</p>
                                </div>;
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className="property-info">
                        <p className="further-details-heading">Property Info</p>
                        <div className="property-info-box">
                            {Array.apply(0, Array(7)).map(function (x, i) {
                                return <div className="info-box-data">
                                    <div className="key-value">
                                        <p>Furnished</p>
                                        <p className="info-box-value">Yes</p>
                                    </div>
                                    {i < 6 ? (<hr />) : (<div></div>)}
                                </div>;
                            })}
                        </div>
                        <hr />
                    </div>
                    <div className="property-info">
                        <p className="further-details-heading">Validated Information</p>
                        <div className="property-info-box">
                            {Array.apply(0, Array(2)).map(function (x, i) {
                                return <div className="info-box-data">
                                    <div className="key-value">
                                        <p>Furnished</p>
                                        <p className="info-box-value">Yes</p>
                                    </div>
                                    {i < 1 ? (<hr />) : (<div></div>)}
                                </div>;
                            })}
                        </div>
                        <hr />
                    </div>
                    <div className="property-info">
                        <p className="further-details-heading">Property History</p>
                        <p className="further-details-subheading">Rent</p>
                        <div className="property-info-box">
                            {Array.apply(0, Array(2)).map(function (x, i) {
                                return <div className="info-box-data">
                                    <div className="key-value">
                                        <p>Furnished</p>
                                        <p className="info-box-value">Yes</p>
                                        <p className="info-box-value">Yes</p>
                                    </div>
                                    {i < 1 ? (<hr />) : (<div></div>)}
                                </div>;
                            })}
                        </div>
                    </div>
                    <p className="further-details-heading">Location</p>
                    <div className="location">
                        <img src={location} alt="" />
                        <p>Hacienda, The Villa</p>
                    </div>
                    <div className="map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: {API_KEY} }}
                            defaultCenter={{
                                    address: '1600 Amphitheatre Parkway, Mountain View, california.',
                                    lat: 37.42216,
                                    lng: -122.08427,
                                  }}
                            defaultZoom={10}>
                        </GoogleMapReact>
                    </div>
                </div>
                <div className="further-details-right">
                    <hr />
                    <div className="map-box">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: {API_KEY} }}
                            defaultCenter={{
                                    address: '1600 Amphitheatre Parkway, Mountain View, california.',
                                    lat: 37.42216,
                                    lng: -122.08427,
                                  }}
                            defaultZoom={10}>
                        </GoogleMapReact>
                    </div>
                    <hr />
                    <div className="know-your-rights-box">
                        <p className="heading">Know your Rights as a Tenant in the UAE</p>
                        <p>Wondering how much you are allowed to borrow from the bank, for a property that is not yet ready? Or how to figure out whether an agent is authorized to represent you?</p>
                        <div className="hide-description">Know more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

