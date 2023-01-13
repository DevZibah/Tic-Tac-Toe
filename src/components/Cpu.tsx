import React from 'react'
import { MdRefresh } from 'react-icons/md'

const Cpu = () => {
  return (
    <div>
      <section className='sec-one'>
        <article className='d-flex XandO XandOo mx-auto'>
          <p className='x'>x</p>
          <p className='o ms-1'>o</p>
        </article>
        <div className='div-one mt-4'>
          <p className='oo'>o</p>
          <p className='text-uppercase turn'>turn</p>
        </div>
        <article className='icon mt-4 ms-3'>
          <MdRefresh className='iconn' />
        </article>
      </section>
      <section className='sec-two mt-2'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
      </section>
      <section className='sec-three mt-4 text-uppercase'>
        <div className='div-two'>
          <p className='mt-3'>x (cpu)</p>
          <br />
          <p className='div-p'>0</p>
        </div>
        <div className='div-three'>
          <p className='mt-3'>ties</p>
          <br />
          <p className='div-p'>0</p>
        </div>
        <div className='div-four'>
          <p className='mt-3'>o (you)</p>
          <br />
          <p className='div-p'>0</p>
        </div>
      </section>
    </div>
  )
}

export default Cpu
