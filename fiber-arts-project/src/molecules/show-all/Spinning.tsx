import './MappedCards.css'
import { useEffect, useState } from "react"
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
            <h3>Spinning</h3>
            {loading ? <Loader/> : <div className="card-holder">
                {spinning.map((spin)=> (
                    <div key={spin.id} className="card">
                        <h4>{spin.name}</h4>
                        <div className="img-holder">
                            {spin.image ? <img src={spin.image} alt={spin.name} className="img" /> : null}
                        </div>
                        <div>{spin.start_date}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}