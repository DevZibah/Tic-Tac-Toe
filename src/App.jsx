import { Routes, Route } from 'react-router-dom'
import './styles/All.css'
import Home from './components/Home.tsx'
import Cpu from './components/Cpu.tsx'
import Player from './components/Player.tsx'
import Modal from './components/Modal.tsx'
import NewRound from './components/NewRound.tsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Cpu' element={<Cpu />}></Route>
        <Route path='/Player' element={<Player />}></Route>
        <Route path='/Modal' element={<Modal />}></Route>
        <Route path='/NewRound' element={<NewRound />}></Route>
      </Routes>
    </div>
  )
}

export default App
