import './pages-styles/Projects.css'
import SeeAll from '../atoms/SeeAll'
// import Loader from '../atoms/Loader'
import ProjectHome from '../organisms/ProjectHome'

export default function Projects () {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <SeeAll />
            {/* <Loader /> */}
            <ProjectHome />
        </div>
    )
}