
import React, { useReducer } from 'react'
import { createContext } from 'react';
import { initState, reducer } from './reducer';  
export const  AppContext = createContext()
export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
  )
}
