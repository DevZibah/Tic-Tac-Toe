import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../contexts/StoreContext'

const NewRound = () => {
  const {
    restartGame,
    setTurn,
    setResult,
    setUser,
    setCpu,
    setScore,
    setCounter,
    setKey,
    setTies,
    user,
    cpu,
    result,
  } = useContext(StoreContext)

  return (
    <div>
      <div className='modal'>
        <div className='modal-dialog'>
          <div className='modal-content p-5'>
            <div className='modal-body text-uppercase'>
              <p className='won'>
                {result.winner === user
                  ? 'you won !'
                  : result.winner === cpu
                  ? 'you lost!'
                  : 'ties!'}
              </p>
              <p
                className='round'
                style={{
                  color:
                    (result.winner === user && user === 'x') ||
                    (result.winner === cpu && cpu === 'x')
                      ? 'hsl(178, 50%, 48%)'
                      : (result.winner === user && user === 'o') ||
                        (result.winner === cpu && cpu === 'o')
                      ? 'hsl(39, 88%, 58%)'
                      : 'hsl(198, 23%, 72%)',
                }}
              >
                {result.winner === user
                  ? user + ' takes the round'
                  : result.winner === cpu
                  ? cpu + ' takes the round'
                  : 'It was a tie'}
              </p>
            </div>
            <section className='sec-five text-uppercase'>
              <Link
                to='/'
                className='linnkk'
                onClick={() => (
                  restartGame(),
                  setTurn(''),
                  setResult(
                    { winner: 'none', state: 'none' },
                    setUser(''),
                    setCpu(''),
                    setScore(0),
                    setCounter(0),
                    setTies(0),
                    setKey(false)
                  )
                )}
              >
                <p className='p-2 cancel ms-5 p-md-3'>quit</p>
              </Link>
              <p
                className='p-2 restart p-md-3'
                onClick={() => (restartGame(), setKey(false))}
              >
                next round
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRound
