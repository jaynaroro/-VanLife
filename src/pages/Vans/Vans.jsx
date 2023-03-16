import React from 'react'
import {Link} from 'react-router-dom'

export default function Vans(){
    const [vans, setVans] = React.useState([])

 React.useEffect(()=>{
    fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
 }, []) 

 const vanElements = vans.map(van => (
    <Link to={`/vans/${van.id}`} className="van" key={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
            <span className={`van-type ${van.type}`}>{van.type}</span>
        </div>
   </Link>
 ))

    return (
        <div className="van-page">
            <h1>Explore our van options</h1>
        <div className="vans">
            {vanElements}
        </div>
        </div>

    )
}