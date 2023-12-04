import { Link } from "react-router-dom"
import './atoms-styles/Clickable.css'

export default function Clickable (props:{name: string, goTo: string}) {
    console.log(props.name)
    return (
        <div>
            <Link to={props.goTo} className="nav-links">
                <div>{props.name}</div>
            </Link>
        </div>
    )
}