import Knitting from "../molecules/Knitting"
import Spinning from "../molecules/Spinning"
import Crochet from "../molecules/Crochet"
import Clickable from "../atoms/Clickable"

export default function ProjectHome () {
    return (
        <div>
            <div className="knitting">
                <Knitting />
                <Clickable name={'Add new project'} goTo={'/projects/add/knitting'} styleClass={"project-home-add-link"} />
            </div>
            <div className="spinning">
                <Spinning />
                <Clickable name={'Add new project'} goTo={'/projects/add/spinning'} styleClass={"project-home-add-link"} />
            </div>
            <div className="crochet">
                <Crochet />
            </div>
        </div>
    )
}