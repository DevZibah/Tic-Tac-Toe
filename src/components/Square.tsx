import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

const Square = () => {
  const { xo } = useContext(StoreContext)

  return (
    <div className='p-4 p-md-5'>
      <p>{xo}</p>
    </div>
  )
}

export default Square
