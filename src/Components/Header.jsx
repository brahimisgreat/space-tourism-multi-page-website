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
        </header>
    </>
  )
}
