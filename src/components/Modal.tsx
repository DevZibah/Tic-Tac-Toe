import React from 'react'
import { Link } from 'react-router-dom'

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div>
      <div className='modal'>
        <div className='modal-dialog'>
          <div className='modal-content p-5'>
            <div className='modal-body text-uppercase'>
              <p>restart game?</p>
            </div>
            <section className='sec-five text-uppercase'>
              <p className='p-2 cancel ms-5 p-md-3' onClick={props.onClose}>
                no, cancel
              </p>
              <Link to='/' className='linnkk'>
                <p className='p-2 restart p-md-3'>yes, restart</p>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
