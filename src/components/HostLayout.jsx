import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout(){
    const activeStyle = {
        textDecoration: 'underline',
        color: '#161616'
    }

    return(
        <>
         <nav className="host-nav">
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host" end>Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/vans" end>Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
         </nav>
         <Outlet/>
        </>
    )
}