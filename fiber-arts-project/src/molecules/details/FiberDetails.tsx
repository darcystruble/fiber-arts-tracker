import './Details.css'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fiberOne, fiberDelete } from "../../api/FiberEditDelete"
// import moment from 'moment'

export default function FiberDetails () {
    type fiberParams = {
        id: string
    }
    let { id } = useParams<fiberParams>()
    console.log(id)
    const navigate = useNavigate()

    const [detail, setDetail] = useState<any>({})

    // show details of one
    useEffect(()=> {
        const getOne = async () => {
            try {
                const res = await fiberOne(`${id}`)
                setDetail(res)
            } catch (e) {
                console.error('Error getting fibering detail', e)
            }
        }
        getOne()
    }, [])
    console.log(detail)

    // update one

    // delete one
    const deleteOne = () => {
        const findAndDelete = async () => {
            await fiberDelete(`${id}`)
        }
        findAndDelete()
        navigate('..', { relative: 'path' })
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
                    <div>Color: {detail.color}</div>
                    <div>Fiber Content: {detail.content}</div>
                </div>
                <div className="tools">
                    <h2>Information:</h2>
                    {/* <div>Yards/Ball: {detail.yardage}</div> */}
                    <div>Number of Balls: {detail.amount}</div>
                    <div>fiber Weight: {detail.weight}</div>
                </div>
            </div>
            <div>
                <div className="project-details">
                    <h2>Fiber Details</h2>
                    <div>Started: {detail.start_date}</div>
                    <button className="update-project">Update fiber</button>
                    <button className="delete-project" onClick={()=> {deleteOne()}}>Delete fiber</button>
                </div>
            </div>
        </div>
    )
}