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
        <div>
            <h2>Knitting</h2>
            {loading ? <Loader/> : <div>
                {knitting.map((knit)=> (
                    <div key={knit.id}>
                        <h3>{knit.name}</h3>
                        <div>{knit.start_date}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}