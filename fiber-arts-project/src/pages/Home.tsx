import { Link } from 'react-router-dom'
import GoalBar from '../atoms/GoalBar'
import Knitting from '../molecules/show-all/Knitting'
import Crochet from '../molecules/show-all/Crochet'
import Spinning from '../molecules/show-all/Spinning'
import Fiber from '../molecules/show-all/Fiber'
import Yarn from '../molecules/show-all/Yarn'

export default function Home () {
    return (
        <div className="home-container">
            <h1>Welcome back. Let's craft!</h1>
            <div className="home-sections">
                <h2 className='section-title'>Goals</h2>
                <div className="section-info">
                    <GoalBar craft={'Knitting'} total={5} current={3} />
                    <GoalBar craft={'Spinning'} total={6} current={2} />
                    <GoalBar craft={'Crochet'} total={2} current={1.5} />
                </div>
            </div>

            <div className="home-sections">
                <h2 className='section-title'>Projects</h2>
                <div className="section-info">
                    <div className="knitting">
                        <div className='title-holder'><Link to={'/projects/knitting'} className='mapped-title'>Knitting</Link></div>
                        <Knitting />
                    </div>
                    <div className="spinning">
                        <div className='title-holder'><Link to={'/projects/spinning'} className='mapped-title'>Spinning</Link></div>
                        <Spinning />
                    </div>
                    <div className="crochet">
                        <div className='title-holder'><Link to={'/projects/crochet'} className='mapped-title'>Crochet</Link></div>
                        <Crochet />
                    </div>
                </div>
            </div>

            <div className="home-sections">
                <h2 className='section-title'>Stash</h2>
                <div className="section-info">
                    <div className="yarn">
                        <div className='title-holder'><Link to={'/stash/yarn'} className='mapped-title'>Yarn</Link></div>
                        <Yarn />
                    </div>

                    <div className="fiber">
                        <div className='title-holder'><Link to={'/stash/fiber'} className='mapped-title'>Fiber</Link></div>
                        <Fiber />
                    </div>
                </div>
            </div>
        </div>
    )
}