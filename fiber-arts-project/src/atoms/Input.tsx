import './atoms-styles/Input.css'
// Copy and paste, update props:
{/* <Input lHtml={'name'} lText={'Fiber Name'} iType={'text'} iId={'name'} iText={'fiber name'} changeFunc={handleChange} /> */}

export default function Input (props:{lHtml: string, lText: string, iType: string, iId: string, iText: string, changeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
        <div className="input-container">
            <label htmlFor={props.lHtml}>{props.lText}:</label>
            <input 
                type={props.iType} 
                id={props.iId}
                placeholder={props.iText}
                onChange={props.changeFunc}
                    />
        </div>
    )
}