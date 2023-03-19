import React from 'react'
import {Link, useParams, Outlet,NavLink} from 'react-router-dom'

export default function VanDetails(){
    const { id } = useParams() //destructured version
    //const params ={useParams}
    const [hostvan,setHostVan] = React.useState({})
    
    //pay attention to the data that comes back from the request....
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`).then(res => res.json()).then((data) => setHostVan(data.vans[0]))
    },[id])

    //NavLink active styling
    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (

        <>
        <div className="host-van-details">
                    <Link to=".."
                    relative="path">
                    &larr; Back to all vans.
                    </Link>

                <section className="host-van-detail-container">
                    <section className="host-van">

                    <span>
                    <img src={hostvan.imageUrl} />
                    </span>

                    <span className="host-van-info">
                    <p className={`${hostvan.type}`}>{hostvan.type}</p>    
                    <h2>{hostvan.name}</h2>
                    <p>${hostvan.price}/day</p>
                    </span>
                    </section>


                    <section className="host-van-info-links">
                        <NavLink style={({isActive})=>isActive ? activeStyle : null} to="." end>Details</NavLink>
                        <NavLink style={({isActive})=>isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({isActive})=>isActive ? activeStyle : null} to="photos">Photos</NavLink>
                    </section>
                </section>
         </div>
        <Outlet context={[hostvan,setHostVan]}/>
        </>
    )
}