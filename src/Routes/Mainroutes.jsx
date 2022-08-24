import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { PrivateRoute } from '../Components/PrivateRoute'
import { Dashboard } from '../Pages/Admin/Dashboard'
import { Homepage } from '../Pages/Homepage'

export const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/admin' element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
    </Routes>
  )
}
