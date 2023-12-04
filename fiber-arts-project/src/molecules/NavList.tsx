import './component-styles/NavList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/projects'><h2>Projects</h2></Link>
                <div className="clickables">
                    <Clickable name={'Add a project'} goTo={'/stash/addyarn'} />
                    <Clickable name={'In Progress'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Completed'} goTo={'/stash/addyarn'} />
                    <Clickable name={'View All'} goTo={'/stash/addyarn'} />
                </div>
                <Link to='/stash'><h2>Stash</h2></Link>
                <div className="clickables">
                    <Clickable name={'Add Yarn'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Add Fiber'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Yarn Stash'} goTo={'/stash/yarn'} />
                    <Clickable name={'Fiber Stash'} goTo={'/stash/fiber'} />
                </div>
                <Link to='/goals'><h2>Goals</h2></Link>
                <div className="clickables">
                    <Clickable name={'Set Goals'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Stats'} goTo={'/stash/addyarn'} />
                </div>
                <h2>Account</h2>
                <div className="clickables">
                    <Clickable name={'View Profile'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Sign Out'} goTo={'/stash/addyarn'} />
                </div>
            </div>
        </div>
    )
}