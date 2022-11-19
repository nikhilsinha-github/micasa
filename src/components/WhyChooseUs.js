import React from 'react'
import '../styles/why_choose_us.css'
import person from '../assets/images/person.png'
import {ReasonCard} from './ReasonCard'
import time from "../assets/images/247.png"
import tax from '../assets/images/tax.png'
import commision from '../assets/images/commision.png'
import insurance from '../assets/images/insurance.png'

export const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
        <div className="left-side">
            <h1>Why Choose Us</h1>
            <p className="answer">Homeway is commited to helping it's client to reach their goals</p>
            <div className="person">
                <img src={person} alt="" />
            </div>
        </div>
        <div className="right-side">
            <ReasonCard img={time} title="24 Hour Consultation" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus qui assumenda molestias? Minima, dolore."/>
            <ReasonCard img={tax} title="Tax Advantage" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus qui assumenda molestias? Minima, dolore."/>
            <ReasonCard img={commision} title="Lowest Commision" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus qui assumenda molestias? Minima, dolore."/>
            <ReasonCard img={insurance} title="Property Insurance" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus qui assumenda molestias? Minima, dolore."/>
        </div>
    </div>
  )
}
