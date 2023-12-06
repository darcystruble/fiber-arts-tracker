import './organism.css'
import { Link } from 'react-router-dom'
import Knitting from "../molecules/show-all/Knitting"
import Spinning from "../molecules/show-all/Spinning"
import Crochet from "../molecules/show-all/Crochet"
import Clickable from "../atoms/Clickable"

export default function ProjectHome () {
    return (
        <div>
            <h1>Projects</h1>
            <div className="quick-links">
                <Clickable name={'Knitting'} goTo={'/projects/knitting'} styleClass={"quick"} />
                <Clickable name={'Spinning'} goTo={'/projects/spinning'} styleClass={"quick"} />
                <Clickable name={'Crochet'} goTo={'/projects/crochet'} styleClass={"quick"} />
            </div>
            <div className="knitting">
                <div className='title-holder'><Link to={'/projects/knitting'} className='mapped-title'>Knitting</Link></div>

                <Clickable name={'Add new knitting project'} goTo={'/projects/add/knitting'} styleClass={"project-home-add-link"} />

                <Knitting />
                
            </div>
            <div className="spinning">
                <div className='title-holder'><Link to={'/projects/spinning'} className='mapped-title'>Spinning</Link></div>

                <Clickable name={'Add new project'} goTo={'/projects/add/spinning'} styleClass={"project-home-add-link"} />

                <Spinning />
            </div>
            <div className="crochet">
                <div className='title-holder'><Link to={'/projects/crochet'} className='mapped-title'>Crochet</Link></div>

                <Clickable name={'Add new project'} goTo={'/projects/add/crochet'} styleClass={"project-home-add-link"} />

                <Crochet />
            </div>
        </div>
    )
}