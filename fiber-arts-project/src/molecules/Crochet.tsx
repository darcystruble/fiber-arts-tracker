import { useEffect, useState } from "react"
import { crochetInfo } from '../api/CrochetInfo'
import Loader from "../atoms/Loader"

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
        <div>
            <h2>Crochet</h2>
            {loading ? <Loader/> : <div>
                {crochet.map((cro)=> (
                    <div key={cro.id}>
                        <h3>{cro.name}</h3>
                        <div>{cro.start_date}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}