import Header from './components/Header'
import BodyLabel from './components/BodyLabel'
import Tabs from './components/Tabs'
import Main from './pages/Main'
import Footer from './components/Footer'

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
