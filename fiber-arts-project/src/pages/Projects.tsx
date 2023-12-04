import './pages-styles/Projects.css'
// import SeeAll from '../atoms/SeeAll'
import ProjectHome from '../organisms/ProjectHome'

export default function Projects () {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            {/* <SeeAll /> */}
            <ProjectHome />
        </div>
    )
}