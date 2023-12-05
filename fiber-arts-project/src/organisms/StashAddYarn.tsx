import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { yarnAdd } from "../api/YarnAdd";
import Input from "../atoms/Input";

export default function StashAddYarn () {
    const navigate = useNavigate()
    const initialState = {
        user: 1,
        name: '',
        brand: '',
        // image: '',
        amount: 0,
        color: '',
        content: '',
        yarn_weight: '',
        yardage: 0,
      };
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        const addNewYarn = async () => {
            try {
                const createdYarn = await yarnAdd(formState)
                console.log('Created yarn:', createdYarn)
            } catch (error) {
                console.error('Error creating yarn', error)
            }
        }
        addNewYarn()
        navigate('/stash/yarn', { replace: true })
    }

    // (props:{html: string, iType: string, iId: string, iText: string, handleChange: () => void})
    return (
        <div className="add-container">
            <h1>Add Yarn to Stash</h1>
            <form onSubmit={handleSubmit}>
                <Input lHtml={'name'} lText={'Yarn Name'} iType={'text'} iId={'name'} iText={'yarn name'} changeFunc={handleChange} />
                <Input lHtml={'brand'} lText={'Brand'} iType={'text'} iId={'brand'} iText={'yarn brand'} changeFunc={handleChange} />
                {/* <label htmlFor="image">Image</label> */}
                {/* <input id='image' type="file" onChange={handleChange} /> */}
                <Input lHtml={'amount'} lText={'Number of skiends purchased'} iType={'text'} iId={'amount'} iText={'#'} changeFunc={handleChange} />
                <Input lHtml={'color'} lText={'Color'} iType={'text'} iId={'color'} iText={'color/colors'} changeFunc={handleChange} />
                <Input lHtml={'content'} lText={'Fiber Content'} iType={'text'} iId={'content'} iText={'fiber content'} changeFunc={handleChange} />
                <Input lHtml={'yarn_weight'} lText={'Yarn Weight'} iType={'text'} iId={'yarn_weight'} iText={'fingering, sport, dk, worseted...'} changeFunc={handleChange} />
                <Input lHtml={'yardage'} lText={'Total Yardage in Stash'} iType={'text'} iId={'yardage'} iText={'#'} changeFunc={handleChange} />
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}