import { useState } from "react";
import { spinEdit } from "../../api/SpinEditDelete";

export default function KnitModal (props:{open: boolean, onClose: ()=> void, idKnit: string, details: any}) {
    const initialState = {
        user: 1,
        name: '',
        brand: '',
        // image: '',
        completion_status: false,
        start_date: '',
        ply: 0,
        singles_weight: 0,
      };
    const [formState, setFormState] = useState(initialState)
    // const [name, setName] = useState('')

    console.log('start', formState)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
        console.log(formState)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState, props.idKnit)
        const editKnit = async () => {
            try {
                const editKnit = await spinEdit(props.idKnit, formState)
                console.log('Updated knitting project:', editKnit)
            } catch (error) {
                console.error('Error updating knitting project', error)
            }
        }
        editKnit()
        const close = props.onClose
        close()
    }
    // console.log(props.details)
    // console.log(props.open, props.idKnit, props.onClose)
    if (!props.open) return null
    
    return (
        <div>
            <div className="modal-outer">
                
                <form onSubmit={handleSubmit} className="modal-form">
                    <label htmlFor="name">Project name:</label>
                    <input type="text" id="name" onChange={handleChange} defaultValue={props.details.name} />
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" onChange={handleChange} defaultValue={props.details.brand} />
                    <label htmlFor="start_date">Start date:</label>
                    <input type="date" id="start_date" onChange={handleChange} defaultValue={props.details.date} />
                    {/* <input type="checkbox" id="completion_status" onChange={handleChange} defaultValue={props.details.completion_status} /> */}
                    <label htmlFor="singles_weight">Singles Weight:</label>
                    <input type="text" id="singles_weight" onChange={handleChange} defaultValue={props.details.singles_weight} />
                    <label htmlFor="ply">Ply:</label>
                    <input type="text" id="ply" onChange={handleChange} defaultValue={props.details.ply} />

                    <button type="submit" className="detail-btn">Update Project</button>
                </form>
                <button onClick={props.onClose} className="detail-btn">Go Back</button>
            </div>
        </div>
    )
}