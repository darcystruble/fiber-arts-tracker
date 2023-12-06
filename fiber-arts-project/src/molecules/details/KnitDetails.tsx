import './Details.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { knitOne, knitDelete } from "../../api/KnitEditDelete"
import KnitModal from '../modals/KnitModal'
// import moment from 'moment'

export default function KnitDetails () {
    type KnitParams = {
        id: string
    }
    let { id } = useParams<KnitParams>()
    // console.log(id)
    const navigate = useNavigate()

    const [detail, setDetail] = useState<any>({})
    // const [isComplete, setIsComplete] = useState(false)
    // const [open, setOpen] = useState(false)
    // const [date, setDate] = useState('')
    const [openModal, setOpenModal] = useState(false)
    // const [formState, setFormState] = useState(detail)
    // console.log('test',formState)

    // show details of one
    useEffect(()=> {
        const getOne = async () => {
            try {
                const res = await knitOne(`${id}`)
                setDetail(res)
                console.log('res:', res)
                // setIsComplete(res.completion_status)
            } catch (e) {
                console.error('Error getting knitting detail', e)
            }
        }
        getOne()
    }, [])
    console.log(detail)

    // delete one
    const deleteOne = () => {
        const findAndDelete = async () => {
            await knitDelete(`${id}`)
        }
        findAndDelete()
        navigate('..', { relative: 'path' })
    }

    return (
        <div className='detail-container'>
            <div className='detail-header'>
                <div>Viewing details for {detail.name}</div>
                <Link to={'/projects/knitting'} className='back'>Back to Knitting Projects</Link>
            </div>
            <div className="detail-outer">
                <div>
                    <div className="img-details">
                        {detail.image ? <img src={detail.image} alt={detail.name} className="img" /> : null}
                    </div>
                </div>
                <div className='detail-main'>
                    <h1 className='detail'>{detail.name}</h1>
                    <div className="top-details">
                        <div className='details-title'>Pattern Used:</div>
                        <div>Category: Knitting</div>
                    </div>
                    <div className="pattern-details">
                        <div className='details-title'>Pattern Used:</div>
                        <div>Pattern: {detail.pattern_name}</div>
                        <div>Designer: {detail.pattern_designer}</div>
                    </div>
                    <div className="tools">
                        <div className='details-title'>Needles Used:</div>
                        <div>Needle Sizes: {detail.needle_size}</div>
                        <div>Needle Type: {detail.needle_type}</div>
                    </div>
                </div>

                <div className='detail-secondary'>
                    <div className="project-details">
                        <div className='details-title'>Project Details</div>
                        <div>Started: {detail.start_date}</div>
                        {/* <div>Complete: <input type="checkbox" onChange={checkboxChange} /> </div>
                        {open ? <div>Finished! <input type="date" onChange={handleChange} /> <button onClick={updateStatus}>Save Finished Date</button> </div> : <div>In progress</div>} */}
                        {/* {isComplete ? <div>Completed: {detail.end_date}</div> : null} */}
                        {detail.completion_status ? <div><div>Status: Finished</div><div>Date Finished: {detail.end_date}</div></div> : <div >Status: Active</div>}
                        <div className="buttons">
                            <button className="detail-btn" onClick={()=> setOpenModal(true)}>Update Project</button>
                            <KnitModal open={openModal} onClose={() => setOpenModal(false)} idKnit={`${id}`} details={detail} />

                            <button className="detail-btn delete-btn" onClick={()=> {deleteOne()}}>Delete Project</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}