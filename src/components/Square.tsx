import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

const Square = ({ square, id }) => {
  const { SquareClick } = useContext(StoreContext)

  return (
    <div className='p-4 p-md-5' onClick={() => SquareClick(id)}>
      <p>{square}</p>
    </div>
  )
}

export default Square
