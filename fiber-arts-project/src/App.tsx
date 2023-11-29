import Header from './components/Header'
import BodyLabel from './components/BodyLabel'
import Main from './pages/Main'

function App() {

  return (
    <div className='app-container'>
        <Header />
      <div className="body-container">
        <BodyLabel />
        <Main />
      </div>
    </div>
  )
}

export default App
