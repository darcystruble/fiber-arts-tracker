import './component-styles/MappedCards.css'
import { useEffect, useState } from "react"
import { knitInfo } from "../api/KnitInfo"
import Loader from "../atoms/Loader"

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
            <h3>Knitting</h3>
            {loading ? <Loader/> : <div className='card-holder'>
                {knitting.map((knit)=> (
                    <div key={knit.id} className="card">
                        <h4>{knit.name}</h4>
                        <div className="img-holder">
                            {knit.image ? <img src={knit.image} alt={knit.name} className="img" /> : null}
                        </div>
                        <div>{knit.start_date}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}