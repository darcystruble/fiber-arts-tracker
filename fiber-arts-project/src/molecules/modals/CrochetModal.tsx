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
                Hello. This is a modal
                <form onSubmit={handleSubmit}>
                    <input type="text" id="name" onChange={handleChange} defaultValue={props.details.name} />
                    <input type="text" id="brand" onChange={handleChange} defaultValue={props.details.brand} />
                    <input type="date" id="start_date" onChange={handleChange} defaultValue={props.details.date} />
                    {/* <input type="checkbox" id="completion_status" onChange={handleChange} defaultValue={props.details.completion_status} /> */}
                    <input type="text" id="pattern_name" onChange={handleChange} defaultValue={props.details.pattern_name} />
                    <input type="text" id="pattern_designer" onChange={handleChange} defaultValue={props.details.pattern_designer} />
                    <input type="text" id="needle_type" onChange={handleChange} defaultValue={props.details.hook_size} />
                    <button type="submit">Update Project</button>
                </form>
                <button onClick={props.onClose}>Go Back</button>
            </div>
        </div>
    )
}