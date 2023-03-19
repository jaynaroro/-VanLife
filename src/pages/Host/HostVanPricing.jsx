import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing(){
    const [hostvan,setHostVan] = useOutletContext()
    return(
        <div  className="hostVanPricing">
            <p><span className="info-price">${`${hostvan.price}.00`}</span>/day</p>
        </div>
    )
}