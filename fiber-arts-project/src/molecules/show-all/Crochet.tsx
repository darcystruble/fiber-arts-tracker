import './MappedCards.css'
import { useEffect, useState } from "react"
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
            <h3>Crochet</h3>
            {loading ? <Loader/> : <div className="card-holder">
                {crochet.map((cro)=> (
                    <div key={cro.id} className="card">
                        <h4>{cro.name}</h4>
                        <div>{cro.start_date}</div>
                        <div className="img-holder">
                            {cro.image ? <img src={cro.image} alt={cro.name} className="img" /> : null}
                        </div>
                    </div>
                ))}
                </div>}
        </div>
    )
}