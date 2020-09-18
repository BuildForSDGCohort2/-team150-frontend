import React from 'react'
import { Link } from "react-router-dom"
//import PropTypes from 'prop-types'
import "./header.scss"
function Header(props) {
    return (
    <header className="header">
        <div>
            <h5 className="logo">fundAfrik</h5>
        </div>
        <nav className="menu">
            <Link to="/">home</Link>
            <Link to="/">home</Link>
            <Link to="/">home</Link>
            <Link to="/" className="auth btn-primary">home</Link>
        </nav>
    </header>
    )
}

Header.propTypes = {

}

export default Header

