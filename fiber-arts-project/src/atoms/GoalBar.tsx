import './atoms-styles/GoalBar.css'

export default function GoalBar (props: {craft: string, total: number, current: number}) {

    const calcProgress = (total: number, current: number) => {
        let percentage = (current/total)*100;
        return percentage
    }
    const progressBar = {
        width: `${calcProgress(props.total, props.current)}%`
    }

    return (
        <div className="goal-bar-container">
            <div className="goal-cat">{props.craft} Goal: {props.total} hours</div>
            <div className="bar-outer">
                <div className="bg-bar">
                    <div className={`${props.craft} progress`} style={progressBar} ></div>
                </div>
                <div className="percent">{props.current} / {props.total} hours</div>
            </div>
        </div>
    )
}