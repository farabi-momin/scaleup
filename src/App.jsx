import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Frame1 from './components/frame1'
import Frame2 from './components/frame2'
import Frame3 from './components/frame3'
import Frame4 from './components/frame4'
import Frame5 from './components/frame5'
import Frame6 from './components/frame6'
import Frame7 from './components/frame7'
import Frame8 from './components/frame8'
import Frame9 from './components/frame9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='main-content'>
        <Frame1/>
        <Frame2/>
        <Frame3/>
        <Frame4/>
        <Frame5/>
        <Frame7/>
        <Frame8/>
        <Frame9/>
      </div>
    </>
  )
}

export default App
