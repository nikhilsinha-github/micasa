import React from 'react'
import {FeaturedAgents} from '../components/FeaturedAgents'
import {NewsLetter} from '../components/NewsLetter'
import {FindYourHome} from '../components/FindYourHome'
import {WhyChooseUs} from '../components/WhyChooseUs'

export const Home = () => {
  return (
    <div>
        <FindYourHome/>
        <FeaturedAgents/>
        <NewsLetter/>
        <WhyChooseUs/>
    </div>
  )
}
