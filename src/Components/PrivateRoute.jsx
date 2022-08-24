import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import {Navigate} from 'react-router-dom'
export const PrivateRoute = ({children}) => {
    const {state}  = useContext(AppContext);

    if(state.isAuth){
        return children;
    }
    
    return <Navigate to="/" />
}
