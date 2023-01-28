import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StoreContext } from '../contexts/StoreContext'

const Home = () => {
  const { setUser, setTurn, setPlayer, setTurrn, turrn } = useContext(StoreContext)

  return (
    <div className=''>
      <motion.div
        initial={{ x: '300px', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 1.5,
        }}
      >
        <section className='d-flex XandO mx-auto'>
          <p className='x'>x</p>
          <p className='o ms-1'>o</p>
        </section>
      </motion.div>
      <motion.div
        initial={{ x: '-300px', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 1.5,
        }}
      >
        <div className='pickplayer text-uppercase p-3'>
          <p className='firsttext'>pick player 1's mark</p>
          <article className='first-art p-2 align-middle'>
            <p
              className='mt-3 x-one'
              onClick={() => (
                setUser('x'), setTurn('x'), setPlayer('o'), setTurrn(true)
              )}
            >
              x
            </p>
            <p
              className='mt-3 o-one'
              onClick={() => (
                setUser('o'), setTurn('o'), setPlayer('x'), setTurrn(true)
              )}
            >
              o
            </p>
          </article>
          <p className='text-uppercase remin mt-3'>remember: X goes first</p>
        </div>
      </motion.div>
      <section className='text-capitalize mt-4'>
        <motion.div
          initial={{ x: '300px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 2,
          }}
        >
          <Link to='/Cpu' className='linnk'>
            <p className='cpu p-3'>new game (vs cpu)</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: '-300px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 2,
          }}
        >
          <Link to='/Player' className='linnk'>
            <p className='player p-3'>new game (vs player)</p>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
