import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {MdMenu, MdClose} from 'react-icons/md'
import './HeaderStyle.css'

export default function Header () {
    const [showNav, setShowNav] = useState(true)

    return (
        <div className='div'>
            <div className='mobile-menu-icon'
                onClick={() => setShowNav(!showNav)}
                role = 'button'
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}>
                <MdMenu/>
            </div>
            <ul className={showNav? 'navMenu hide-item' : 'navMenu'}>
                <div className='closeNavIcon'
                    onClick={() => setShowNav(!showNav)}
                    role = 'button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>
                    <MdClose/>
                </div>
                <li>
                    <NavLink to='/'>home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>about</NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>projects</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

