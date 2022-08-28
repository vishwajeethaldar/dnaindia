
import React, { useReducer, useState } from 'react'
import { createContext } from 'react';
import { initState, reducer } from './reducer';  
export const  AppContext = createContext()
export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const [search, setSearch] = useState({});
  return (
    <AppContext.Provider value={{state, dispatch, search, setSearch}}>{children}</AppContext.Provider>
  )
}
