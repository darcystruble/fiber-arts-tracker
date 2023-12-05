import './Details.css'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { spinOne, spinDelete } from "../../api/SpinEditDelete"
// import moment from 'moment'

export default function SpinDetails () {
    type spingParams = {
        id: string
    }
    let { id } = useParams<spingParams>()
    console.log(id)
    const navigate = useNavigate()

    const [detail, setDetail] = useState<any>({})
    const [isComplete, setIsComplete] = useState(false)

    // show details of one
    useEffect(()=> {
        const getOne = async () => {
            try {
                const res = await spinOne(`${id}`)
                setDetail(res)
            } catch (e) {
                console.error('Error getting spingting detail', e)
            }
        }
        getOne()
    }, [])
    console.log(detail)

    // update one

    // delete one
    const deleteOne = () => {
        const findAndDelete = async () => {
            await spinDelete(`${id}`)
        }
        findAndDelete()
        navigate('..', { relative: 'path' })
    }

    const checkboxChange = () => {
        if (isComplete) {
            setIsComplete(false)
        } else {
            setIsComplete(true)
        }      
    }

    return (
        <div className="detail-container">
            <div>
                <h1 className='detail'>{detail.name}</h1>
                <div className="img-details">
                    {detail.image ? <img src={detail.image} alt={detail.name} className="img" /> : null}
                </div>
                <div className="pattern-details">
                    <h2>Pattern Used:</h2>
                    <div>Pattern: {detail.pattern_name}</div>
                    <div>Designer: {detail.pattern_designer}</div>
                </div>
                <div className="tools">
                    <h2>Needles Used:</h2>
                    <div>Needle Sizes: {detail.needle_size}</div>
                    <div>Needle Type: {detail.needle_type}</div>
                </div>
            </div>
            <div>
                <div className="project-details">
                    <h2>Project Details</h2>
                    <div>Started: {detail.start_date}</div>
                    <div>Complete: <input type="checkbox" onChange={checkboxChange} /> </div>
                    {isComplete ? <div>Finished!</div> : <div>In progress</div>}
                    <button className="update-project">Update Project</button>
                    <button className="delete-project" onClick={()=> {deleteOne()}}>Delete Project</button>
                </div>
            </div>
        </div>
    )
}