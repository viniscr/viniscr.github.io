import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Vinícius Barbosa</h1>
        <p>Full Stack Developer</p>
    </header>
)

export default Header
