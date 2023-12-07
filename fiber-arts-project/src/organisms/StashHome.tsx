import { Link } from "react-router-dom";
import Yarn from "../molecules/show-all/Yarn";
import Fiber from "../molecules/show-all/Fiber";
import Clickable from "../atoms/Clickable";

export default function StashHome () {
    return (
        <div className="stash-home-container">
            <div className="quick-links">
                <Clickable name={'Yarn'} goTo={'/stash/yarn'} styleClass={"quick"} />
                <Clickable name={'Fiber'} goTo={'/stash/fiber'} styleClass={"quick"} />
            </div>
            <div className="yarn">
                <div className='title-holder'><Link to={'/stash/yarn'} className='mapped-title'>Yarn</Link></div>
                <Clickable name={'Add new yarn'} goTo={'/stash/add/yarn'} styleClass={"project-home-add-link"} />
                <Yarn />
            </div>
            <div className="fiber">
                <div className='title-holder'><Link to={'/stash/fiber'} className='mapped-title'>Fiber</Link></div>
                <Clickable name={'Add new fiber'} goTo={'/stash/add/fiber'} styleClass={"project-home-add-link"} />
                <Fiber />
            </div>
        </div>
    )
}