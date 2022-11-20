import React, { useState } from 'react'
// import { FaCaretDown } from 'react-icons/fa'
import '../styles/dropdown.css'
import dropdownArrow from '../assets/svg/dropdown_arrow.svg'

export const Dropdown = (props) => {
    const [isActive, setIsActive] = useState(false)
    const options = ['Dubai', 'Dubai', 'Dubai']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                <p>{props.selected}</p>
                <div className="expand-btn">
                    <img src={dropdownArrow} alt="" />
                </div>
            </div>
            {isActive &&
                <div className="dropdown-content">
                    {options.map(option=> (<div>{option}</div>))}
                </div>
            }
        </div>
    )
}
