import React, { useState, useContext } from 'react'
import { MdRefresh } from 'react-icons/md'
import Modal from './Modal'
import { motion } from 'framer-motion'
import { StoreContext } from '../contexts/StoreContext'
import Square from './Square'

const Cpu = () => {
  const [show, setShow] = useState(false)
  const { newsquare, turn, turrn, user, cpu } = useContext(StoreContext)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
        exit={{ opacity: 0, y: -200, transition: { duration: 0.9 } }}
      >
        <section className='sec-one'>
          <article className='d-flex XandO XandOo mx-auto'>
            <p className='x'>x</p>
            <p className='o ms-1'>o</p>
          </article>
          <div className='div-one mt-4'>
            <p className='oo'>{turrn ? user : cpu}</p>
            <p className='text-uppercase turn'>turn</p>
          </div>
          <section>
            <article className='icon mt-4 ms-3' onClick={() => setShow(true)}>
              <MdRefresh className='iconn' />
            </article>
            <Modal show={show} onClose={() => setShow(false)} />
          </section>
        </section>
      </motion.div>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0, transition: { duration: 0.9 } }}
        exit={{ x: -200, transition: { duration: 0.9 } }}
      >
        <section className='sec-two mt-2'>
          {newsquare.map((square, id) => (
            <Square key={id} square={square} id={id} />
          ))}
        </section>
      </motion.div>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0, transition: { duration: 0.9 } }}
        exit={{ y: 200, transition: { duration: 0.9 } }}
      >
        <section className='sec-three mt-4 text-uppercase'>
          <div className='div-two p-md-2'>
            <p className='mt-3'>{cpu} (cpu)</p>
            <br />
            <p className='div-p'>0</p>
          </div>
          <div className='div-three p-md-2'>
            <p className='mt-3'>ties</p>
            <br />
            <p className='div-p'>0</p>
          </div>
          <div className='div-four p-md-2'>
            <p className='mt-3'>{user} (you)</p>
            <br />
            <p className='div-p'>0</p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Cpu
