import React from 'react'
import '../styles/featured_agents.css';
import {AgentCard} from './AgentCard'

export const FeaturedAgents = () => {
  return (
    <div className="featured-agents">
        <h1>Our Featured Agents</h1>
        <p>Find new & featured property for you</p>
        <div className="agent-cards">
            <AgentCard/>
            <AgentCard/>
            <AgentCard/>
        </div>
    </div>
  )
}
