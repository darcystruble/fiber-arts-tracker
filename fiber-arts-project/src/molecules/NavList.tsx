import './component-styles/NavList.css'
import { useState } from 'react'
import Clickable from '../atoms/Clickable'

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
                <h2>Projects</h2>
                <div className="clickables">
                    <Clickable name={'Add a project'} />
                    <Clickable name={'In Progress'} />
                    <Clickable name={'Completed'} />
                    <Clickable name={'View All'} />
                </div>
                <h2>Stash</h2>
                <div className="clickables">
                    <Clickable name={'Add Yarn'} />
                    <Clickable name={'Add Fiber'} />
                    <Clickable name={'Yarn Stash'} />
                    <Clickable name={'Fiber Stash'} />
                </div>
                <h2>Goals</h2>
                <div className="clickables">
                    <Clickable name={'Set Goals'} />
                    <Clickable name={'Stats'} />
                </div>
                <h2>Account</h2>
                <div className="clickables">
                    <Clickable name={'View Profile'} />
                    <Clickable name={'Sign Out'} />
                </div>
            </div>
        </div>
    )
}