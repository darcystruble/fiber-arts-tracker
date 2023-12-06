import './MappedCards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { spinInfo } from "../../api/SpinInfo"
import Loader from "../../atoms/Loader"

export default function Spinning () {
    const [spinning, setSpinning] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getSpinning = async () => {
            try {
                const res = await spinInfo()
            setSpinning(res)
            } catch (e) {
                console.error('Error setting spinning', e)
            } finally {
                setLoading(false)
            }
        }
        getSpinning()
    }, [])
    console.log(spinning)

    return (
        <div className='item-container'>
            {loading ? <Loader/> : <div className="card-holder">
                {spinning.map((spin)=> (
                    <Link key={spin.id} to={`/projects/spinning/${spin.id}`} className='card-link'>
                        <div className="card">
                            <h4>{spin.name}</h4>
                            <div className="img-holder">
                                {spin.image ? <img src={spin.image} alt={spin.name} className="img" /> : null}
                            </div>
                            {spin.completion_status ? <div className='more-info'><b>Status:</b> Finished</div> : <div className='more-info'><b>Status:</b> Active</div>}
                            <div className='see-more more-info'>See more information</div>
                        </div>
                    </Link>
                ))}
                </div>}
        </div>
    )
}