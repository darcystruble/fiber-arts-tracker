import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import BodyLabel from './components/BodyLabel'
import Tabs from './components/Tabs'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {
  // States
  const [knitting, setKnitting] = useState('')
  // const [crochet, setCrochet] = useState('')

  // base url for database
  const baseUrl = 'http://127.0.0.1:8000/'

  useEffect(()=> {
    const getKnitting = async () => {axios.get(`${baseUrl}projects/kniting/`).then((res)=>{
      console.log(res)
    })}
    getKnitting()
  }, [])

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
