import './component-styles/Header.css'
import NavList from "./NavList"
import Logo from '../assets/EVENT.png'

export default function Header () {
    return (
        <div className="header-container">
            {/* <h1>Crafted</h1> */}
            <div className="logo">
                <img src={Logo} alt="" className='img-logo'/>
            </div>
            <NavList />
        </div>
    )
}