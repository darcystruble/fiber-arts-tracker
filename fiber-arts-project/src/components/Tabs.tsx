import './component-styles/Tabs.css'
import { NavLink } from "react-router-dom"

export default function Tabs () {
    return (
        <div className="tabs-container">
                <NavLink to='/' className={({ isActive})=> isActive ? 'active' : 'not-active'} >Home</NavLink>
                <NavLink to='/projects' className={({ isActive})=> isActive ? 'active' : 'not-active'} >Projects</NavLink>
                <NavLink to='/stash' className={({ isActive})=> isActive ? 'active' : 'not-active'} >Stash</NavLink>
                <NavLink to='/goals' className={({ isActive})=> isActive ? 'active' : 'not-active'} >Goals</NavLink>
                <NavLink to='/account' className={({ isActive})=> isActive ? 'active' : 'not-active'} >Account</NavLink>
            
        </div>
    )
}