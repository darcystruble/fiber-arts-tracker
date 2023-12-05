import { Route, Routes } from "react-router-dom"
import Account from "./Account"
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"
import Knitting from "../molecules/show-all/Knitting"
import Spinning from "../molecules/show-all/Spinning"
import Crochet from "../molecules/show-all/Crochet"
import KnitDetails from "../molecules/details/KnitDetails"
import ProjectAdd from "../organisms/ProjectAdd"
import AddKnitProject from "../molecules/add/AddKnitProject"
import AddSpinProject from "../molecules/add/AddSpinProject"
import AddCrochetProject from "../molecules/add/AddCrocehtProject"
import StashAddYarn from "../organisms/StashAddYarn"
import StashAddFiber from "../organisms/StashAddFiber"
import Yarn from "../molecules/show-all/Yarn"
import Fiber from "../molecules/show-all/Fiber"

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
                <Route path='/projects/knitting/:id' element={ <KnitDetails />} />
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