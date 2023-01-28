import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [player, setPlayer] = useState('')
  const clearState = ['', '', '', '', '', '', '', '', '']
  const [newsquare, setNewsquare] = useState(clearState)
  const [turn, setTurn] = useState('x')
  const [result, setResult] = useState({ winner: 'none', state: 'none' })
  const [turrn, setTurrn] = useState()
  const [score, setScore] = useState(0)
  const [counter, setCounter] = useState(0)
  const [ties, setTies] = useState(0)
  const [key, setKey] = useState(false)

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

  const PlayerClick = (id) => {
    //update the value of the square to which ever player that's playing
    //if you click on a square, this function loops through newsquare array and change the id of that square from an empty string to a new value string that is if that square is empty
    setNewsquare(
      newsquare.map((square, idx) => {
        if (idx == id && square == '') {
          return turrn ? user : player
          // return user if turrn is true, else return player
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
        //checks if the winning player1 is user or player
        setResult({
          winner: Player1 === user ? user : player,
          state: 'won',
        })
        if (Player1 === user) {
          setScore(score + 1)
        } else if (Player1 === player) {
          setCounter(counter + 1)
        } else {
          setScore(0)
          setCounter(0)
        }
      }
    })
  }

  const CheckTie = () => {
    let filled = true
    newsquare.forEach((sq) => {
      if (sq === '') {
        filled = false
      }
    })
    if (filled) {
      setResult({ winner: 'nobody', state: 'tie' })
      if (filled === true) {
        setTies(ties + 1)
        setCounter(counter)
        setScore(score)
      }
    }
  }
  //use this hook to check everytime the newsquare has changed
  useEffect(() => {
    CheckTie()
    CheckWinner()
    if (user === 'x') {
      setTurrn(!turrn)
    } else {
      setTurrn(!turrn)
    }
  }, [newsquare])

  //alert the result when it changes
  useEffect(() => {
    if (result.state !== 'none') {
      setKey(true)
    }
  }, [result])

  console.log('user is', user)
  console.log('player is', player)
  console.log('turn is', turn)
  console.log('user score is', score)
  console.log('player score is', counter)
  console.log('result is', result.state)
  console.log(key)

  return (
    <StoreContext.Provider
      value={{
        newsquare,
        clearState,
        result,
        user,
        turn,
        turrn,
        player,
        score,
        counter,
        key,
        ties,
        setTies,
        setKey,
        setScore,
        setCounter,
        setPlayer,
        setTurrn,
        setResult,
        setUser,
        setTurn,
        setNewsquare,
        restartGame,
        PlayerClick,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
