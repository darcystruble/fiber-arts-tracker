import Clickable from "../atoms/Clickable"

export default function ProjectAdd () {

    return (
        <div className="add-container">
            <h2>Add a new Project!</h2>
            <Clickable name={'Add a Knitting Project'} goTo={'/projects/add/knitting'} styleClass={"project-links"} />
            <Clickable name={'Add a Spinning Project'} goTo={'/projects/add/spinning'} styleClass={"project-links"} />
            <Clickable name={'Add a Crochet Project'} goTo={'/projects/add/crochet'} styleClass={"project-links"} />
        </div>
    )
}