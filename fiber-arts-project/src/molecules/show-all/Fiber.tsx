import './MappedCards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { fiberInfo } from '../../api/Fiber.ts'
import Loader from "../../atoms/Loader.tsx"

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
            <div className='title-holder'><Link to={'/stash/fiber'} className='mapped-title'>Fiber</Link></div>
            {loading ? <Loader/> : <div className="card-holder">
                {fiber.map((fib)=> (
                    <Link to={`/stash/fiber/${fib.id}`} key={fib.id} className='card-link'>
                        <div className="card">
                            <h4>{fib.name}</h4>
                            <div className="img-holder">
                                {fib.image ? <img src={fib.image} alt={fib.name} className="img" /> : null}
                            </div>
                            <div className='more-info'>{fib.content}</div>
                            <div className='see-more more-info'>See more information</div>
                        </div>
                    </Link>
                ))}
                </div>}
        </div>
    )
}