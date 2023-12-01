import { useEffect, useState } from "react"
import { spinInfo } from "../api/SpinInfo"
import Loader from "../atoms/Loader"

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
        <div>
            <h2>Spinning</h2>
            {loading ? <Loader/> : <div>
                {spinning.map((spin)=> (
                    <div key={spin.id}>
                        <h3>{spin.name}</h3>
                        <div>{spin.start_date}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}