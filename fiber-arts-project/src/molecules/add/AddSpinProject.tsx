import { useState } from "react"
import { spinAdd } from "../../api/SpinAdd";
import Input from "../../atoms/Input";

export default function AddSpinProject () {

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        const addNewSpin = async () => {
            try {
                const createdSpin = await spinAdd(formState)
                console.log('Created spinning project:', createdSpin)
            } catch (error) {
                console.error('Error creating spinning project', error)
            }
        }
        addNewSpin()
    }

    return (
        <div className="add-container">
            <h1>Add a new Spinning Project</h1>
            <form onSubmit={handleSubmit}>
                <Input lHtml={'name'} lText={'Project Name'} iType={'text'} iId={'name'} iText={'project name'} changeFunc={handleChange} />
                <Input lHtml={'brand'} lText={'Fiber Brand'} iType={'text'} iId={'brand'} iText={'fiber brand'} changeFunc={handleChange} />
                {/* <label htmlFor="image">Image</label> */}
                {/* <input id='image' type="file" onChange={handleChange} /> */}
                <Input lHtml={'start_date'} lText={'Project Start Date'} iType={'date'} iId={'start_date'} iText={''} changeFunc={handleChange} />
                <Input lHtml={'singles_weight'} lText={'Singles Weight'} iType={'text'} iId={'singles_weight'} iText={'weight of singles'} changeFunc={handleChange} />
                <Input lHtml={'ply'} lText={'Number of plies in finished yarn'} iType={'text'} iId={'ply'} iText={'#'} changeFunc={handleChange} />
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}