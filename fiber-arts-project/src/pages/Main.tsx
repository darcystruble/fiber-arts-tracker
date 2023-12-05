import { Route, Routes } from "react-router-dom"
import Account from "./Account"
// pages
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"
// Molecules -> Show All
import Knitting from "../molecules/show-all/Knitting"
import Spinning from "../molecules/show-all/Spinning"
import Crochet from "../molecules/show-all/Crochet"
import Yarn from "../molecules/show-all/Yarn"
import Fiber from "../molecules/show-all/Fiber"
// Molecules -> Details (show one, edit, delete)
import KnitDetails from "../molecules/details/KnitDetails"
import CrochetDetails from "../molecules/details/CrochetDetails"
import SpinDetails from "../molecules/details/SpinningDetails"
import YarnDetails from "../molecules/details/YarnDetails"
import FiberDetails from "../molecules/details/FiberDetails"
// Add Projects
import ProjectAdd from "../organisms/ProjectAdd"
import AddKnitProject from "../molecules/add/AddKnitProject"
import AddSpinProject from "../molecules/add/AddSpinProject"
import AddCrochetProject from "../molecules/add/AddCrochetProject"
import StashAddYarn from "../organisms/StashAddYarn"
import StashAddFiber from "../organisms/StashAddFiber"

export default function Main ({  }) {
    return (
        <div className="main-container">
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/goals' element={ <Goals /> } />
                {/* project paths */}
                <Route path='/projects' element={ <Projects /> } />
                {/* add projects */}
                <Route path='/projects/add' element={ <ProjectAdd/>} />
                <Route path='/projects/add/knitting' element={ <AddKnitProject /> } />
                <Route path='/projects/add/spinning' element={ <AddSpinProject /> } />
                <Route path='/projects/add/crochet' element={ <AddCrochetProject /> } />
                {/* view category and individual */}
                <Route path='/projects/knitting' element={ <Knitting /> } />
                <Route path='/projects/knitting/:id' element={ <KnitDetails />} />
                <Route path='/projects/spinning' element={ <Spinning /> } />
                <Route path='/projects/spinning/:id' element={ <SpinDetails /> } />
                <Route path='/projects/crochet' element={ <Crochet /> } />
                <Route path='/projects/crochet/:id' element={ <CrochetDetails /> } />
                {/* stash paths */}
                <Route path='/stash' element={ <Stash /> } />
                {/* add stash */}
                <Route path='/stash/add/yarn' element={ <StashAddYarn /> } />
                <Route path='/stash/add/fiber' element={ <StashAddFiber /> } />
                {/* view category and individual */}
                <Route path='/stash/yarn' element={ <Yarn />} />
                <Route path='/stash/yarn/:id' element={ <YarnDetails />} />
                <Route path='/stash/fiber' element={ <Fiber /> } />
                <Route path='/stash/fiber/:id' element={ <FiberDetails /> } />
                <Route path='/account' element={ <Account /> } />
            </Routes>
        </div>
    )
}