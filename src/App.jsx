import { Routes, Route } from 'react-router-dom'
import './styles/All.css'
import { useContext, Fragment } from 'react'
import Home from './components/Home.tsx'
import Cpu from './components/Cpu.tsx'
import Player from './components/Player.tsx'
import Modal from './components/Modal.tsx'
import { StoreContext } from './contexts/StoreContext'

function App() {
  const { loading } = useContext(StoreContext)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Cpu' element={<Cpu />}></Route>
        <Route path='/Player' element={<Player />}></Route>
        <Route path='/Modal' element={<Modal />}></Route>
      </Routes>
    </div>
  )
}

export default App
