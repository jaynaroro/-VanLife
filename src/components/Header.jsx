import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/vanlife.png"

export default function Header(){
    return (
        <nav className="header">
            <Link className="logo" to="/"><img src={logo} alt="vanlife" /></Link>
            <Link className="about-link links" to="/About">About</Link>
            <Link className="links" to="/Vans">Vans</Link>
        </nav>
    )
}