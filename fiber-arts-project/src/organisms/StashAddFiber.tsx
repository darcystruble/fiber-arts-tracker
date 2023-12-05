import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { fiberAdd } from "../api/FiberAdd";
import Input from "../atoms/Input";

export default function StashAddFiber () {
    const navigate = useNavigate()
    const initialState = {
        user: 1,
        name: '',
        brand: '',
        // image: '',
        amount: 0,
        color: '',
        content: '',
        fiber_weight_grams: '',
      };
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        const addNewFiber = async () => {
            try {
                const createdFiber = await fiberAdd(formState)
                console.log('Created fiber:', createdFiber)
            } catch (error) {
                console.error('Error creating fiber', error)
            }
        }
        addNewFiber()
        navigate('/stash/fiber', { replace: true})
    }

    // (props:{html: string, iType: string, iId: string, iText: string, handleChange: () => void})
    return (
        <div className="add-container">
            <h1>Add Fiber to Stash</h1>
            <form onSubmit={handleSubmit}>
                <Input lHtml={'name'} lText={'Fiber Name'} iType={'text'} iId={'name'} iText={'fiber name'} changeFunc={handleChange} />
                <Input lHtml={'brand'} lText={'Brand'} iType={'text'} iId={'brand'} iText={'fiber brand'} changeFunc={handleChange} />
                {/* <label htmlFor="image">Image</label> */}
                {/* <input id='image' type="file" onChange={handleChange} /> */}
                <Input lHtml={'amount'} lText={'Number of braids/bags purchased'} iType={'text'} iId={'amount'} iText={'#'} changeFunc={handleChange} />
                <Input lHtml={'color'} lText={'Color'} iType={'text'} iId={'color'} iText={'color/colors'} changeFunc={handleChange} />
                <Input lHtml={'content'} lText={'Fiber Content'} iType={'text'} iId={'content'} iText={'fiber content'} changeFunc={handleChange} />
                <Input lHtml={'fiber_weight_grams'} lText={'Weight of Fiber in Grams'} iType={'text'} iId={'fiber_weight_grams'} iText={'#'} changeFunc={handleChange} />
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}