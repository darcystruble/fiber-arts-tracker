import './Details.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { knitOne } from "../../api/KnitEditDelete"

export default function KnitDetails () {
    type KnitParams = {
        id: string
    }
    let { id } = useParams<KnitParams>()
    console.log(id)

    const [detail, setDetail] = useState<any>({})

    useEffect(()=> {
        const getOne = async () => {
            try {
                const res = await knitOne(`${id}`)
                setDetail(res)
            } catch (e) {
                console.error('Error getting knitting detail', e)
            }
        }
        getOne()
    }, [])
    console.log(detail)

    // useEffect(()=> {
    //     const editOne = async () => {
    //         try {

    //         } catch (e) {
    //             console.error('Error editing knitting detail', e)
    //         }
    //     }
    // })

    return (
        <div className="detail-container">
            <div>
                <h1 className='detail'>{detail.name}</h1>
                <div className="img-details">
                    {detail.image ? <img src={detail.image} alt={detail.name} className="img" /> : null}
                </div>
                <div className="pattern-details">
                    <div>Pattern: {detail.pattern_name}</div>
                    <div>Designer: {detail.pattern_designer}</div>
                </div>
                <div className="tools">
                    <div>Needle Sizes: {detail.needle_size}</div>
                    <div>Needle Type: {detail.needle_type}</div>
                </div>
            </div>
            <div>
                <div className="project-details">
                    <div>Started: {detail.start_date}</div>
                    <div>Complete: {detail.completion_status}</div>
                    <button className="update-project">Update Project</button>
                    <button className="delete-project">Delete Project</button>
                </div>
            </div>
        </div>
    )
}