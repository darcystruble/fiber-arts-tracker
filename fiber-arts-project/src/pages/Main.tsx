import { Route, Routes } from "react-router-dom"
import Account from "./Account"
import Home from "./Home"
import Goals from "./Goals"
import Projects from "./Projects"
import Stash from "./Stash"

// interface KnitInfo {
//     brand: string
//     completion_status: boolean
//     end_date: string
//     id: number
//     log: []
//     name: string
//     needle_size: string
//     needle_type: string
//     pattern_designer: string
//     pattern_name: string
//     start_date: string
//     user: number
//   }

export default function Main ({  }) {
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