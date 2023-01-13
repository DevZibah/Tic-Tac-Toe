import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <section className='d-flex XandO mx-auto'>
        <p className='x'>x</p>
        <p className='o ms-1'>o</p>
      </section>
      <div className='pickplayer text-uppercase p-3'>
        <p className='firsttext'>pick player 1's mark</p>
        <article className='first-art p-2 align-middle'>
          <p className='mt-3'>x</p>
          <p className='mt-3'>o</p>
        </article>
        <p className='text-uppercase remin mt-3'>remember: X goes first</p>
      </div>
      <section className='text-capitalize mt-4'>
        <Link to='/Cpu' className='linnk'>
          <p className='cpu p-3'>new game (vs cpu)</p>
        </Link>
        <p className='player p-3'>new game (vs player)</p>
      </section>
    </div>
  )
}

export default Home
