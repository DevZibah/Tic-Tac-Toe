import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const clearState = ['', '', '', '', '', '', '', '', '']
  const [newsquare, setNewsquare] = useState(clearState)
  const [turn, setTurn] = useState('')
  const [result, setResult] = useState({ winner: 'none', state: 'none' })

  const restartGame = () => {
    setNewsquare(clearState)
  }

  const Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  console.log('user is', user)

  const SquareClick = (id) => {
    //update the value of the square to which ever player that's playing
    //if you click on a square, this function loops through newsquare array and change the id of that square from an empty string to a new value string that is if that square is empty
    setNewsquare(
      newsquare.map((square, idx) => {
        if (idx == id && square == '') {
          return user
        }
        //else return the current value(empty string)
        return square
      })
    )
  }

  const CheckWinner = () => {
    //this function uses the patterns array to check the winner.
    //check to see if it's filled by same player
    Patterns.forEach((currPattern) => {
      //determine the first player that exist at that index ex: [0,1,2]
      const Player1 = newsquare[currPattern[0]]
      if (Player1 == '') return
      let foundWinningPattern = true
      //check if the other players are equal to the first player
      currPattern.forEach((id) => {
        if (newsquare[id] != Player1) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        setResult({ winner: user, state: 'won' })
      }
    })
  }

  const CheckTie = () => {
    let filled = true
    newsquare.forEach((sq) => {
      if (sq == '') {
        filled = false
      }
    })
    if (filled) {
      setResult({ winner: 'no one', state: 'tie' })
    }
  }

  //use this hook to check everytime the newsquare has changed
  useEffect(() => {
    CheckWinner()
    CheckTie()

    if (user === 'x') {
      setUser('o')
      setTurn('o')
    } else {
      setUser('x')
      setTurn('x')
    }
  }, [newsquare])

  //alert the result when it changes
  useEffect(() => {
    if (result.state !== 'none') {
      alert('game ended! winning player:' + result.winner)
      // restartGame()
    }
  }, [result])

  return (
    <StoreContext.Provider
      value={{
        newsquare,
        user,
        turn,
        setUser,
        setTurn,
        setNewsquare,
        restartGame,
        SquareClick,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
