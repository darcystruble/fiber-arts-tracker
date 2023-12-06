import './Details.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { crochetOne, crochetDelete } from "../../api/CrochetEditDelete"
import CrochetModal from '../modals/CrochetModal'
// import moment from 'moment'

export default function crochetDetails () {
    type crochetParams = {
        id: string
    }
    let { id } = useParams<crochetParams>()
    console.log(id)
    const navigate = useNavigate()

    const [detail, setDetail] = useState<any>({})
    const [openModal, setOpenModal] = useState(false)
    // const [isComplete, setIsComplete] = useState(false)

    // show details of one
    useEffect(()=> {
        const getOne = async () => {
            try {
                const res = await crochetOne(`${id}`)
                setDetail(res)
            } catch (e) {
                console.error('Error getting crochetting detail', e)
            }
        }
        getOne()
    }, [])
    console.log(detail)

    // update one

    // delete one
    const deleteOne = () => {
        const findAndDelete = async () => {
            await crochetDelete(`${id}`)
        }
        findAndDelete()
        navigate('..', { relative: 'path' })
    }

    // const checkboxChange = () => {
    //     if (isComplete) {
    //         setIsComplete(false)
    //     } else {
    //         setIsComplete(true)
    //     }      
    // }

    return (
        <div className="detail-container">
            <div className="detail-header">
            <div>Viewing details for {detail.name}</div>
                <Link to={'/projects/crochet'} className='back'>Back to Crochet Projects</Link>
            </div>
            <div className='detail-outer'>
                <div>
                    <div className="img-details">
                        {detail.image ? <img src={detail.image} alt={detail.name} className="img" /> : null}
                    </div>
                </div>
                <div className="detail-main">
                    <h1 className='detail'>{detail.name}</h1>
                    
                    <div className="pattern-details">
                        <div className='details-title'>Pattern Used:</div>
                        <div>Pattern: {detail.pattern_name}</div>
                        <div>Designer: {detail.pattern_designer}</div>
                    </div>
                    <div className="tools">
                        <div className='details-title'>Needles Used:</div>
                        <div>Needle Sizes: {detail.hook_size}</div>
                        {/* <div>Needle Type: {detail.needle_type}</div> */}
                    </div>
                </div>

                <div className="detail-secondary">
                    <div className="project-details">
                        <div className='details-title'>Project Details</div>
                        <div>Started: {detail.start_date}</div>
                        {/* <div>Complete: <input type="checkbox" onChange={checkboxChange} /> </div>
                        {isComplete ? <div>Finished!</div> : <div>In progress</div>} */}
                        {detail.completion_status ? <div><div>Status: Finished</div><div>Date Finished: {detail.end_date}</div></div> : <div >Status: Active</div>}
                        <div className="buttons">
                            <button className="detail-btn" onClick={()=> setOpenModal(true)}>Update Project</button>
                            <CrochetModal open={openModal} onClose={() => setOpenModal(false)} idKnit={`${id}`} details={detail} />
                            <button className="detail-btn delete-btn" onClick={()=> {deleteOne()}}>Delete Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}