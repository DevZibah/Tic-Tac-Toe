import React, { createContext, useContext } from 'react'
import { useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [xo, setXo] = useState('')
  console.log(xo)
  return (
    <StoreContext.Provider
      value={{
        xo,
        setXo,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
