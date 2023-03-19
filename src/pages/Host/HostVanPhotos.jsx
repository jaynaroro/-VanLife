import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos(){
    const [hostvan, setHostVan] = useOutletContext()
    return(
        <div className="hostVanPhoto">
            <img src={hostvan.imageUrl} />
        </div>
    )
}