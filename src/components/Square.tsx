import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

const Square = ({ square, id }) => {
  const { PlayerClick, user, player } = useContext(StoreContext)

  return (
    <div className='p-4 p-md-5' onClick={() => PlayerClick(id)}>
      <p
        style={{
          color:
            (square === 'x' && user === 'x') ||
            (square === 'x' && player === 'x')
              ? 'hsl(178, 50%, 48%)'
              : (square === 'o' && user === 'o') ||
                (square === 'o' && player === 'o')
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
