import './component-styles/Tabs.css'
import { NavLink } from "react-router-dom"

export default function Tabs () {
    return (
        <div className="tabs-container">
                <NavLink to='/' className={({ isActive})=> isActive ? 'active' : 'inactive'} >Home</NavLink>
                <NavLink to='/projects' className={({ isActive})=> isActive ? 'active' : 'inactive'} >Projects</NavLink>
                <NavLink to='/stash' className={({ isActive})=> isActive ? 'active' : 'inactive'} >Stash</NavLink>
                <NavLink to='/goals' className={({ isActive})=> isActive ? 'active' : 'inactive'} >Goals</NavLink>
                <NavLink to='/account' className={({ isActive})=> isActive ? 'active' : 'inactive'} >Account</NavLink>
            
        </div>
    )
}