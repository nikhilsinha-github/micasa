import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import '../styles/agent_card.css'

export const AgentCard = () => {
  return (
    <div className="agent-card">
      <div className="icons">
        <FaStar color="rgb(84,115,109)"/>
        <IoEllipsisVerticalOutline color="rgb(84,115,109)"/>
      </div>
      <div className="agent-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GhyeRCrZKqtN9dIZzm1cWi0kBuUTTlA3KI7jFS9k&s" alt="" />
      </div>
      <p className="agent-name">Muslim Uddin</p>
      <p className="agent-designation">Manager</p>
      <p className="agent-phone">+8801716-401415</p>
      <p className="agent-email">homeway17@gmail.com</p>
    </div>
  )
}
