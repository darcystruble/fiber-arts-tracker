import './component-styles/Header.css'
import NavList from "./NavList"

export default function Header () {
    return (
        <div className="header-container">
            <h1>Crafted</h1>
            <NavList />
        </div>
    )
}