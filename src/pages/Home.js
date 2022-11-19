import React from 'react'
import {FeaturedAgents} from '../components/FeaturedAgents'
import {NewsLetter} from '../components/NewsLetter'
import {FindYourHome} from '../components/FindYourHome'
import {WhyChooseUs} from '../components/WhyChooseUs'
import {ExploreProperties} from '../components/ExploreProperties'

export const Home = () => {
  return (
    <div>
        <FindYourHome/>
        <WhyChooseUs/>
        <FeaturedAgents/>
        <NewsLetter/>
        <ExploreProperties/>
    </div>
  )
}
