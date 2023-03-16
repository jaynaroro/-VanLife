import React from 'react'
import {Link,useParams} from 'react-router-dom'

export default function VanDetails(){
    const { id } = useParams() //destructured version
    //const params ={useParams}
    const [hostvan,setHostVan] = React.useState({})
    
    //pay attention to the data that comes back from the request....
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`).then(res => res.json()).then((data) => setHostVan(data.vans[0]))
    },[id])

    return (
        <div className="host-van-details">
            <img src={hostvan.imageUrl} />
        </div>
    )
}