import './Details.css'
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

    // update one
    // const checkboxChange = () => {
    //     setOpen(!open) 
    // }
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setDate(e.target.value)
    //     console.log('change:', date)
    // }
    // const updateStatus = () => {
    //     const findAndUpdate = async () => {
    //         await knitEdit(`${id}`, { completion_status: !isComplete })
    //         setIsComplete(!isComplete)
    //     }
    //     findAndUpdate()
    //     setOpen(!open)
    // }

    // delete one
    const deleteOne = () => {
        const findAndDelete = async () => {
            await knitDelete(`${id}`)
        }
        findAndDelete()
        navigate('..', { relative: 'path' })
    }

    // testing this

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormState({...formState, [e.target.id]: e.target.value})
    //     console.log(formState)
    // }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     console.log(formState, id)
    //     const editKnit = async () => {
    //         try {
    //             const editKnit = await knitEdit(`${id}/`, formState)
    //             console.log('Updated knitting project:', editKnit)
    //         } catch (error) {
    //             console.error('Error updating knitting project', error)
    //         }
    //     }
    //     editKnit()
    //     // navigate('/projects/knitting', { replace: true })
    //     const close = () => {setOpenModal(false)}
    //     close()
    // }


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
                    {/* <div>Complete: <input type="checkbox" onChange={checkboxChange} /> </div>
                    {open ? <div>Finished! <input type="date" onChange={handleChange} /> <button onClick={updateStatus}>Save Finished Date</button> </div> : <div>In progress</div>} */}
                    {/* {isComplete ? <div>Completed: {detail.end_date}</div> : null} */}
                    <button className="update-project" onClick={()=> setOpenModal(true)}>Update Project</button>
                    <KnitModal open={openModal} onClose={() => setOpenModal(false)} idKnit={`${id}`} details={detail} />

                    {/* {!openModal ? null : <div className="modal-outer">
                        Hello. This is a modal
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="name" onChange={handleChange} defaultValue={detail.name} />
                            <button type="submit">Update Project</button>
                        </form>
                        <button onClick={() => setOpenModal(false)}>Go Back</button>
                    </div>} */}

                    <button className="delete-project" onClick={()=> {deleteOne()}}>Delete Project</button>
                </div>
            </div>
        </div>
    )
}