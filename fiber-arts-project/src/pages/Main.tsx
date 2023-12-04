import { Route, Routes } from "react-router-dom"
import Account from "./Account"
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"
import ProjectAdd from "../organisms/ProjectAdd"
import StashAddYarn from "../organisms/StashAddYarn"
import Yarn from "../molecules/Yarn"
import Fiber from "../molecules/Fiber"

export default function Main ({  }) {
    return (
        <div className="main-container">
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/goals' element={ <Goals /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/projects/add' element={ <ProjectAdd/>} />
                <Route path='/stash' element={ <Stash /> } />
                <Route path='/stash/addyarn' element={ <StashAddYarn /> } />
                <Route path='/stash/yarn' element={ <Yarn />} />
                <Route path='/stash/fiber' element={ <Fiber /> } /> 
                <Route path='/account' element={ <Account /> } />
            </Routes>
        </div>
    )
}