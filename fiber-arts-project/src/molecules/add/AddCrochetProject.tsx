import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { crochetAdd } from "../../api/CrochetAdd";
import Input from "../../atoms/Input";

export default function AddCrochetProject () {
    const navigate = useNavigate()
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        const addNewCrochet = async () => {
            try {
                const createdCrochet = await crochetAdd(formState)
                console.log('Created crochet project:', createdCrochet)
            } catch (error) {
                console.error('Error creating crochet project', error)
            }
        }
        addNewCrochet()
        navigate('/projects/crochet', { replace: true })
    }

    return (
        <div className="add-container">
            <h1>Add a new Crochet Project</h1>
            <form onSubmit={handleSubmit}>
                <Input lHtml={'name'} lText={'Project Name'} iType={'text'} iId={'name'} iText={'project name'} changeFunc={handleChange} />
                <Input lHtml={'brand'} lText={'Brand'} iType={'text'} iId={'brand'} iText={'pattern brand'} changeFunc={handleChange} />
                {/* <label htmlFor="image">Image</label> */}
                {/* <input id='image' type="file" onChange={handleChange} /> */}
                <Input lHtml={'start_date'} lText={'Project Start Date'} iType={'date'} iId={'start_date'} iText={''} changeFunc={handleChange} />
                <Input lHtml={'pattern_name'} lText={'Pattern Name'} iType={'text'} iId={'pattern_name'} iText={'pattern name'} changeFunc={handleChange} />
                <Input lHtml={'pattern_desinger'} lText={'Pattern Designer'} iType={'text'} iId={'pattern_designer'} iText={'pattern designer'} changeFunc={handleChange} />
                <Input lHtml={'hook_size'} lText={'Hook Size(s)'} iType={'text'} iId={'hook_size'} iText={'hook size'} changeFunc={handleChange} />
                
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}