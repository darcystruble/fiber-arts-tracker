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
                    <Clickable name={'Add a project'} goTo={'/projects/add'} styleClass={"nav-links"} />
                    {/* <Clickable name={'In Progress'} goTo={'/stash/addyarn'} />
                    <Clickable name={'Completed'} goTo={'/stash/addyarn'} /> */}
                    <Clickable name={'Knitting Projects'} goTo={'/projects/knitting'} styleClass={"nav-links"} />
                    <Clickable name={'Spinning Projects'} goTo={'/projects/spinning'} styleClass={"nav-links"} />
                    <Clickable name={'Crochet Projects'} goTo={'/projects/crochet'} styleClass={"nav-links"} />
                    <Clickable name={'View All'} goTo={'/projects'} styleClass={"nav-links"} />
                </div>
                <Link to='/stash'><h2>Stash</h2></Link>
                <div className="clickables">
                    <Clickable name={'Add Yarn'} goTo={'/stash/addyarn'} styleClass={"nav-links"} />
                    <Clickable name={'Add Fiber'} goTo={'/stash/addfiber'} styleClass={"nav-links"} />
                    <Clickable name={'Yarn Stash'} goTo={'/stash/yarn'} styleClass={"nav-links"} />
                    <Clickable name={'Fiber Stash'} goTo={'/stash/fiber'} styleClass={"nav-links"} />
                </div>
                <Link to='/goals'><h2>Goals</h2></Link>
                <div className="clickables">
                    <Clickable name={'Set Goals'} goTo={'/stash/addyarn'} styleClass={"nav-links"} />
                    <Clickable name={'Stats'} goTo={'/stash/addyarn'} styleClass={"nav-links"} />
                </div>
                <h2>Account</h2>
                <div className="clickables">
                    <Clickable name={'View Profile'} goTo={'/stash/addyarn'} styleClass={"nav-links"} />
                    <Clickable name={'Sign Out'} goTo={'/stash/addyarn'} styleClass={"nav-links"} />
                </div>
            </div>
        </div>
    )
}