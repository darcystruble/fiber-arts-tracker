import { useState } from "react"
import { yarnAdd } from "../api/YarnAdd";

export default function StashAddYarn () {
    interface initialState {
        user: number;
        name: string;
        brand: string;
        image: string;
        amount: number;
        color: string;
        content: string;
        yarn_weight: string;
        yardage: number;
    }
    const [formState, setFormState] = useState<initialState>({user: 1, name: '', brand: '', image: '', amount: 0, color: '', content: '', yarn_weight: '', yardage: 0})

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
    }

    return (
        <div className="add-yarn-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Yarn Name</label>
                <input id='name' type="text" onChange={handleChange} placeholder="yarn name"/>
                <label htmlFor="brand">Brand</label>
                <input id='brand' type="text" onChange={handleChange} placeholder="yarn brand"/>
                <label htmlFor="image">Image</label>
                <input id='image' type="file" onChange={handleChange} />
                <label htmlFor="amount">Number of skiens purchased</label>
                <input id='amount' type="text" onChange={handleChange} placeholder="#"/>
                <label htmlFor="color">Color</label>
                <input id='color' type="text" onChange={handleChange} placeholder="color"/>
                <label htmlFor="content">Fiber Content</label>
                <input id='content' type="text" onChange={handleChange} placeholder="fiber content"/>
                <label htmlFor="yarn_weight">Yarn Weight</label>
                <input id='yarn_weight' type="text" onChange={handleChange} placeholder="yarn weight"/>
                <label htmlFor="yardage">Total Yardage</label>
                <input id='yardage' type="text" onChange={handleChange} placeholder="#"/>
                <button type='submit'>enter</button>
            </form>
        </div>
    )
}