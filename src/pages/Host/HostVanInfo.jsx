import React from 'react'
import {useOutletContext} from 'react-router-dom'

export default function HostVanInfo(){
    const [hostvan,setHostVan] = useOutletContext()

    return(
        <div className="hostVanInfo">
            <p><span className="tag">Name : </span>{hostvan.name}</p>
            <p><span className="tag">Category : </span>{hostvan.type}</p>
            <p><span className="tag">Description : </span>{hostvan.description}</p>
            <p><span className="tag">Visibility : </span>Public</p>
        </div>
    )
}