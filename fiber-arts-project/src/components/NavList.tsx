import './component-styles/NavList.css'
import { useState } from 'react'

export default function NavList () {

    // burger classes
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle menu function
    const viewMenu = () => {
        if(!isMenuClicked){
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="nav-container">
            <div className='burger-menu' onClick={viewMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className={menuClass}>
                <h2>Account</h2>
                <h2>Projects</h2>
                <h2>Stash</h2>
                <h2>Goals</h2>
            </div>
        </div>
    )
}