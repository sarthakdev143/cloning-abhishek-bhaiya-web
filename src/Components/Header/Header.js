import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className='center1'>
      <nav>
        <ul type="none">
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
      {/* <nav id='mob-nav'>
        <ul id='dropdown' type="none">
          <li>
            <NavLink id='link' to="/" activeClassName="active">
              home
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink id='link' to="/services" activeClassName="active">
              services
            </NavLink>
          </li>
        </ul>
        <ul id='nav-ul' type="none">
          <li>
            <i class="ri-menu-2-line"></i>
          </li>
          <li>
            <NavLink id='link' className="highlight" to="/">
              abhishek yadav
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header