import Tabs from '../components/Tabs'

export default function Home () {
    return (
        <div className="home-container">
            <Tabs />
            <h1>Home Page</h1>
            <div>All main content goes here</div>
            <h2>Goals</h2>
            <h2>Projects</h2>
            <h2>Stash</h2>
        </div>
    )
}