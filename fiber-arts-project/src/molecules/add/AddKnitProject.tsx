import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { knitAdd } from "../../api/KnitAdd";
import Input from "../../atoms/Input";

export default function AddKnitProject () {
    const navigate = useNavigate()
    const initialState = {
        user: 1,
        name: '',
        brand: '',
        // image: '',
        completion_status: false,
        start_date: '',
        pattern_name: 0,
        pattern_designer: 0,
        needle_type: '',
        needle_size: '',
      };
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        const addNewKnit = async () => {
            try {
                const createdKnit = await knitAdd(formState)
                console.log('Created knitting project:', createdKnit)
            } catch (error) {
                console.error('Error creating knitting project', error)
            }
        }
        addNewKnit()
        navigate('/projects/knitting', { replace: true })
    }

    return (
        <div className="add-container">
            <h1>Add a new Knitting Project</h1>
            <form onSubmit={handleSubmit}>
                <Input lHtml={'name'} lText={'Project Name'} iType={'text'} iId={'name'} iText={'project name'} changeFunc={handleChange} />
                <Input lHtml={'brand'} lText={'Brand'} iType={'text'} iId={'brand'} iText={'pattern brand'} changeFunc={handleChange} />
                {/* <label htmlFor="image">Image</label> */}
                {/* <input id='image' type="file" onChange={handleChange} /> */}
                <Input lHtml={'start_date'} lText={'Project Start Date'} iType={'date'} iId={'start_date'} iText={''} changeFunc={handleChange} />
                <Input lHtml={'pattern_name'} lText={'Pattern Name'} iType={'text'} iId={'pattern_name'} iText={'pattern name'} changeFunc={handleChange} />
                <Input lHtml={'pattern_desinger'} lText={'Pattern Designer'} iType={'text'} iId={'pattern_designer'} iText={'pattern designer'} changeFunc={handleChange} />
                <Input lHtml={'needle_size'} lText={'Needle Size(s)'} iType={'text'} iId={'needle_size'} iText={'needle size'} changeFunc={handleChange} />
                <Input lHtml={'needle_type'} lText={'Needle Type'} iType={'text'} iId={'needle_type'} iText={'straight, circular, interchangable...'} changeFunc={handleChange} />
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}