import './MappedCards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { knitInfo } from "../../api/KnitInfo"
import Loader from "../../atoms/Loader"

export default function Knitting () {
    const [knitting, setKnitting] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getKnitting = async () => {
            try {
                const res = await knitInfo()
                setKnitting(res)
            } catch (e) {
                console.error('Error setting knitting', e)
            } finally {
                setLoading(false)
            }
        }
        getKnitting()
    }, [])
    console.log(knitting)
    return (
        <div className='item-container'>
            {/* <div className='title-holder'><Link to={'/projects/knitting'} className='mapped-title'>Knitting</Link></div> */}
            {loading ? <Loader/> : <div className='card-holder'>
                {knitting.map((knit)=> (
                    <Link key={knit.id} to={`/projects/knitting/${knit.id}`} className='card-link'>
                    <div className="card">    
                        <h4>{knit.name}</h4>
                        <div className="img-holder">
                            {knit.image ? <img src={knit.image} alt={knit.name} className="img" /> : null}
                        </div>
                        {knit.completion_status ? <div className='more-info'><b>Status:</b> Finished</div> : <div className='more-info'><b>Status:</b> Active</div>}
                        <div className='see-more more-info'>See more information</div>    
                    </div>
                    </Link>
                ))}
                </div>}
        </div>
    )
}