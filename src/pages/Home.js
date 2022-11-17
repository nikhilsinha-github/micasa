import React from 'react'
import {FeaturedAgents} from '../components/FeaturedAgents'
import {NewsLetter} from '../components/NewsLetter'
import {FindYourHome} from '../components/FindYourHome'

export const Home = () => {
  return (
    <div>
        <FindYourHome/>
        <FeaturedAgents/>
        <NewsLetter/>
    </div>
  )
}
