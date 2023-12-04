import { Route, Routes } from "react-router-dom"
import Account from "./Account"
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"
import Knitting from "../molecules/Knitting"
import Spinning from "../molecules/Spinning"
import Crochet from "../molecules/Crochet"
import ProjectAdd from "../organisms/ProjectAdd"
import AddKnitProject from "../molecules/AddKnitProject"
import AddSpinProject from "../molecules/AddSpinProject"
import AddCrochetProject from "../molecules/AddCrocehtProject"
import StashAddYarn from "../organisms/StashAddYarn"
import StashAddFiber from "../organisms/StashAddFiber"
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
                <Route path='/projects/add/knitting' element={ <AddKnitProject /> } />
                <Route path='/projects/add/spinning' element={ <AddSpinProject /> } />
                <Route path='/projects/add/crochet' element={ <AddCrochetProject /> } />
                <Route path='/projects/knitting' element={ <Knitting /> } />
                <Route path='/projects/spinning' element={ <Spinning /> } />
                <Route path='/projects/crochet' element={ <Crochet /> } />
                <Route path='/stash' element={ <Stash /> } />
                <Route path='/stash/addyarn' element={ <StashAddYarn /> } />
                <Route path='/stash/addfiber' element={ <StashAddFiber /> } />
                <Route path='/stash/yarn' element={ <Yarn />} />
                <Route path='/stash/fiber' element={ <Fiber /> } /> 
                <Route path='/account' element={ <Account /> } />
            </Routes>
        </div>
    )
}