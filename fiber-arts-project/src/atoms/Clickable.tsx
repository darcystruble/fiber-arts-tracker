import { Link } from "react-router-dom"
import './atoms-styles/Clickable.css'

// Copy and paste into component, change out props:
{/* <Clickable name={'Add new project'} goTo={'/projects/add/spinning'} styleClass={"project-home-add-link"} /> */}

export default function Clickable (props:{name: string, goTo: string, styleClass: string}) {
    console.log(props.name)
    return (
        <div className={`${props.styleClass}-outer`}>
            <Link to={props.goTo} className={props.styleClass}>
                <div>{props.name}</div>
            </Link>
        </div>
    )
}