import './MappedCards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { crochetInfo } from '../../api/CrochetInfo'
import Loader from "../../atoms/Loader"

export default function Crochet () {
    const [crochet, setCrochet] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getCrochet = async () => {
            try {
                const res = await crochetInfo()
                setCrochet(res)
            } catch (e) {
                console.error('Error setting spinning', e)
            } finally {
                setLoading(false)
            }
        }
        getCrochet()
    }, [])
    console.log(crochet)

    return (
        <div className='item-container'>
            {loading ? <Loader/> : <div className="card-holder">
                {crochet.map((cro)=> (
                    <Link key={cro.id}to={`/projects/crochet/${cro.id}`} className='card-link'>
                        <div className="card">
                            <h4>{cro.name}</h4>
                            <div className="img-holder">
                                {cro.image ? <img src={cro.image} alt={cro.name} className="img" /> : null}
                            </div>
                            {cro.completion_status ? <div className='more-info'><b>Status:</b> Finished</div> : <div className='more-info'><b>Status:</b> Active</div>}
                            <div className='see-more more-info'>See more information</div>
                        </div>
                    </Link>
                ))}
                </div>}
        </div>
    )
}