import React from 'react'
import {Link} from 'react-router-dom'

export default function Vans(){
    const [hostVans, setHostVans] =React.useState([])

    React.useEffect(()=>{
        fetch("/api/host/vans").then(res => res.json()).then((data) => setHostVans(data.vans))
    },[])

    const vanElement = hostVans.map((van)=>{
        return (<Link key={van.id} to={`/host/vans/${van.id}`}>
            <div className="host-van-card">
                <img src={van.imageUrl} />
                <span className="host-van-card-info">
                <h2>{van.name}</h2>
                <p>${van.price}/day</p>
                </span>
            </div></Link>
        )
    })

    return(
        <div className="host-vans-page">
            <h1>Your listed  vans</h1>
                {vanElement}
        </div>
    )
}