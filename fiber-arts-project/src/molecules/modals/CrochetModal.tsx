import { useState } from "react";
import { crochetEdit } from "../../api/CrochetEditDelete";

export default function KnitModal (props:{open: boolean, onClose: ()=> void, idKnit: string, details: any}) {
    const initialState = {
        user: 1,
        name: '',
        brand: '',
        // image: '',
        completion_status: false,
        start_date: '',
        pattern_name: '',
        pattern_designer: '',
        hook_size: '',
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
                const editKnit = await crochetEdit(props.idKnit, formState)
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
                <h2>Edit Project:</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <label htmlFor="name">Project name:</label>
                    <input type="text" id="name" onChange={handleChange} defaultValue={props.details.name} />
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" onChange={handleChange} defaultValue={props.details.brand} />
                    <label htmlFor="start_date">Start date:</label>
                    <input type="date" id="start_date" onChange={handleChange} defaultValue={props.details.date} />
                    {/* <input type="checkbox" id="completion_status" onChange={handleChange} defaultValue={props.details.completion_status} /> */}
                    <label htmlFor="pattern_name">Pattern name:</label>
                    <input type="text" id="pattern_name" onChange={handleChange} defaultValue={props.details.pattern_name} />
                    <label htmlFor="pattern_designer">Pattern designer:</label>
                    <input type="text" id="pattern_designer" onChange={handleChange} defaultValue={props.details.pattern_designer} />
                    <label htmlFor="hook_size">Hook size:</label>
                    <input type="text" id="hook_size" onChange={handleChange} defaultValue={props.details.hook_size} />
                    <button type="submit" className="detail-btn">Update Project</button>
                </form>
                <button onClick={props.onClose} className="detail-btn">Go Back</button>
            </div>
        </div>
    )
}