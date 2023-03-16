import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from "../assets/vanlife.png"

export default function Header(){

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
        color: "#161616"
    }


    return (
        <nav className="header">
            <NavLink className="logo" to="/"><img src={logo} alt="vanlife" /></NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/Host">Host</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/About">About</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/Vans">Vans</NavLink>
        </nav>
    )
}