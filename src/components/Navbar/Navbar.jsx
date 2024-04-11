import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { aboutPath, backPath, contactPath, regisPath } from '../../routes'

export default function Navbar() {
  return (
   <>
    <div className='Footer__nav'>
      <nav>
        <li>
        <NavLink to='/'>Menu</NavLink>
        </li>
        <li>
          <NavLink to={regisPath}>Registration</NavLink>
        </li>
        <li>
          <NavLink to={aboutPath}>About the company</NavLink>
        </li>
        <li>
          <NavLink  to={contactPath}>Contacts</NavLink>
        </li>
        <li>
          <NavLink  to={backPath}>Feedback</NavLink>
        </li>
      </nav>
    </div>
   </>
  )
}

