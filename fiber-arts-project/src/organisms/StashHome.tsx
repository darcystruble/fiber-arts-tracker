import Yarn from "../molecules/show-all/Yarn";
import Fiber from "../molecules/show-all/Fiber";
import Clickable from "../atoms/Clickable";

export default function StashHome () {
    return (
        <div className="stash-home-container">
            <div className="yarn">
                <Yarn />
                <Clickable name={'Add new yarn'} goTo={'/stash/add/yarn'} styleClass={"project-home-add-link"} />
            </div>
            <div className="fiber">
                <Fiber />
                <Clickable name={'Add new fiber'} goTo={'/stash/add/fiber'} styleClass={"project-home-add-link"} />
            </div>
        </div>
    )
}