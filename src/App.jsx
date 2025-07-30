import { useState } from 'react'
import './App.css'
import BasicGrid from './components/BasicGrid/BasicGrid'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <BasicGrid />
    </>
  )
}

export default App
