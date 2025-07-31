import { useState } from 'react'
import './App.css'
import BasicGrid from './components/BasicGrid/BasicGrid'
import Navbar from './components/Navbar/Navbar'
import HeroMain from './components/HeroMain/HeroMain'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroMain />
    <BasicGrid />
    </>
  )
}

export default App
