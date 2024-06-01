import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [isRight, setIsRight] = useState(false)

  const handleRight = () => {
    setIsRight(!isRight)
  }

  return (
    <>
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
        <nav id='mob-nav'>
          <ul id='nav-ul' type="none">
            <li>
              <i class="ri-menu-2-line" onClick={handleRight}></i>
            </li>
            <li>
              <NavLink id='link' className="highlight" to="/">
                abhishek yadav
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <ul id='dropright' type="none" className={isRight ? "doRight" : ''}>
        <i className="ri-close-line" onClick={handleRight}></i>
        <li>
          <NavLink id='link' to="/" activeClassName="active">
            home
          </NavLink>
        </li>
        <li>
          <NavLink id='link' to="/services" activeClassName="active">
            services
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Header