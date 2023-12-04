import './pages-styles/Home.css'
import GoalBar from '../atoms/GoalBar'
import Knitting from '../molecules/Knitting'
import Crochet from '../molecules/Crochet'
import Spinning from '../molecules/Spinning'
import Fiber from '../molecules/Fiber'
import Yarn from '../molecules/Yarn'

export default function Home () {
    return (
        <div className="home-container">
            <h2>Goals</h2>
            <div className="section-info">
                <GoalBar craft={'Knitting'} total={5} current={3} />
                <GoalBar craft={'Spinning'} total={6} current={2} />
                <GoalBar craft={'Crochet'} total={2} current={1.5} />
            </div>
            <h2>Projects</h2>
            <div className="section-info">
                <Knitting />
                <Spinning />
                <Crochet />
            </div>
            <h2>Stash</h2>
            <div className="section-info">
                <Fiber />
                <Yarn />
            </div>
        </div>
    )
}