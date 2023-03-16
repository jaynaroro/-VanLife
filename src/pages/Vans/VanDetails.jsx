import React from 'react'
import  { useParams,Link} from 'react-router-dom'

export default function VanDetails(){
    const params = useParams()
    const [van, setVan] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(
    <div className="van-details">
        <Link to="/Vans" >Back to all vans </Link>
        <img src={van.imageUrl} />
        <span className={`van-type ${van.type}`}>{van.type}</span>
        <h1>{van.name}</h1>
        <p><span className="van-price">${van.price}</span>/day</p>
        <p>{van.description}</p>
        <button>Rent this van</button>
    </div>
    )
}