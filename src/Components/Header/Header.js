import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className='center1'>
      <nav className='flex'>
        <ul type="none" className='faic'>
          <li>
            <NavLink id='link' to="/" activeClassName="active">
              home
            </NavLink>
          </li>
          <li>
            <NavLink id='link' className="highlight" to="/">
              abhishek yadav
            </NavLink>
          </li>
          <li>
            <NavLink id='link' to="/services" activeClassName="active">
              services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header