import { Route, Routes } from "react-router-dom"
import Account from "./Account"
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"

export default function Main () {
    return (
        <div className="main-container">
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/goals' element={ <Goals /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/stash' element={ <Stash /> } />
                <Route path='/account' element={ <Account /> } />
            </Routes>
        </div>
    )
}