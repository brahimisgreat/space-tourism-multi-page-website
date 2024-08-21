import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'

export const Header = () => {
  return (
    <>
        <header className='header'>
            <div>
                <Link to="/"><img src={logo} alt='logo' /></Link>
            </div>

            <nav className='navbar'>
                <ul>
                    <li><Link to="/"><span>00</span> HOME</Link></li>
                    <li><Link to="/destination"><span>01</span> DESTINATION</Link></li>
                    <li><Link to="/crew"><span>02</span> CREW</Link></li>
                    <li><Link to="/technology"><span>03</span> TECHNOLOGY</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
