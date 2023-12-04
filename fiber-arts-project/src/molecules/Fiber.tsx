import { useEffect, useState } from "react"
import { fiberInfo } from '../api/Fiber.ts'
import Loader from "../atoms/Loader"

export default function Fiber () {
    const [fiber, setFiber] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getFiber = async () => {
            try {
                const res = await fiberInfo()
            setFiber(res)
            } catch (e) {
                console.error('Error setting spinning', e)
            } finally {
                setLoading(false)
            }
        }
        getFiber()
    }, [])
    console.log(fiber)

    return (
        <div className='item-container'>
            <h3>Fiber</h3>
            {loading ? <Loader/> : <div className="card-holder">
                {fiber.map((fib)=> (
                    <div key={fib.id} className="card">
                        <h4>{fib.name}</h4>
                        <div className="img-holder">
                            <img src={fib.image} alt={fib.name} className="img" />
                        </div>
                        <div>{fib.brand}</div>
                        <div>{fib.content}</div>
                    </div>
                ))}
                </div>}
        </div>
    )
}