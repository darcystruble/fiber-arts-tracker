import './MappedCards.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { yarnInfo } from '../../api/Yarn.ts'
import Loader from "../../atoms/Loader.tsx"

export default function Yarn () {
    const [yarn, setYarn] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getYarn = async () => {
            try {
                const res = await yarnInfo()
            setYarn(res)
            } catch (e) {
                console.error('Error setting spinning', e)
            } finally {
                setLoading(false)
            }
        }
        getYarn()
    }, [])
    console.log(yarn)

    return (
        <div className='item-container'>
            <div className='title-holder'><Link to={'/stash/yarn'} className='mapped-title'>Yarn</Link></div>
            {loading ? <Loader/> : <div className="card-holder">
                {yarn.map((yar)=> (
                    <Link key={yar.id} to={`/stash/yarn/${yar.id}`} className='card-link'>
                        <div className="card">
                            <h4>{yar.name}</h4>
                            <div className="img-holder">
                                {yar.image ? <img src={yar.image} alt={yar.name} className="img" /> : null}
                            </div>
                            <div className='more-info'>{yar.brand}</div>
                            <div className='see-more more-info'>See more infomration</div>
                        </div>
                    </Link>
                ))}
                </div>}
        </div>
    )
}