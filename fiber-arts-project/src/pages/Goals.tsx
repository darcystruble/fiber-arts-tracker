import GoalBar from "../atoms/GoalBar"
export default function Goals () {
    return (
        <div className="goals-container">
            <h1>Goals</h1>
            <GoalBar craft={'Knitting'} total={5} current={3} />
            <GoalBar craft={'Spinning'} total={6} current={2} />
            <GoalBar craft={'Crochet'} total={2} current={1.5} />
        </div>
    )
}