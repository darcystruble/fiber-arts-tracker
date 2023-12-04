import './pages-styles/Home.css'
import Knitting from '../molecules/Knitting'
import Crochet from '../molecules/Crochet'
import Spinning from '../molecules/Spinning'
import Fiber from '../molecules/Fiber'
import Yarn from '../molecules/Yarn'

export default function Home () {
    return (
        <div className="home-container">
            {/* <h2>Goals</h2> */}
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