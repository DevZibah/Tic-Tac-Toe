import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

const Square = ({ square, id }) => {
  const { SquareClick, user, cpu } = useContext(StoreContext)

  return (
    <div className='p-4 p-md-5' onClick={() => SquareClick(id)}>
      <p
        style={{
          color:
            (square === 'x' && user === 'x') || (square === 'x' && cpu === 'x')
              ? 'hsl(178, 50%, 48%)'
              : (square === 'o' && user === 'o') ||
                (square === 'o' && cpu === 'o')
              ? 'hsl(39, 88%, 58%)'
              : 'hsl(198, 23%, 72%)',
        }}
      >
        {square}
      </p>
    </div>
  )
}

export default Square
