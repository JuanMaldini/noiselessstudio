import { useState } from 'react'
import './App.css'
import BasicGrid from './components/BasicGrid/BasicGrid'
import Navbar from './components/Navbar/Navbar'
import HeroMain from './components/HeroMain/HeroMain'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroMain />
    <BasicGrid />
    <Footer />
    </>
  )
}

export default App
