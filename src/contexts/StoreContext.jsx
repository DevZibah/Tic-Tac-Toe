import React, { createContext, useContext } from 'react'
import { useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [xo, setXo] = useState('')
  const [user, setUser] = useState('')
  const newsquare = ['', '', '', '', '', '', '', '', '']
  return (
    <StoreContext.Provider
      value={{
        xo,
        newsquare,
        user,
        setUser,
        setXo,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
