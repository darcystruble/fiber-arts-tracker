import Header from './molecules/Header'
import BodyLabel from './molecules/BodyLabel'
import Tabs from './molecules/Tabs'
import Main from './pages/Main'
import Footer from './molecules/Footer'


function App() {
  return (
    <div className='app-container'>
        <Header />
      <div className="body-container">
        <BodyLabel />
        <Tabs />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
