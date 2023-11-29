import Header from './components/Header'
import BodyLabel from './components/BodyLabel'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app-container'>
        <Header />
      <div className="body-container">
        <BodyLabel />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
