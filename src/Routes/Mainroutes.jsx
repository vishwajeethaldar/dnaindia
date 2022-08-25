import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { PrivateRoute } from '../Components/PrivateRoute'
import { Dashboard } from '../Pages/Admin/Dashboard'
import { BusinessPage } from '../Pages/BusinessPage'
import { EducationPage } from '../Pages/EducationPage'
import { EntertainmentPage } from '../Pages/EntertainmentPage'
import { ExplainersPage } from '../Pages/ExplainersPage'
import { Homepage } from '../Pages/Homepage'
import { IndiaPage } from '../Pages/IndiaPage'
import { LatestNewsPage } from '../Pages/LatestNewspage'
import { LatestNewsSinglePage } from '../Pages/LatestNewsSinglePage'
import { LyfeStylePage } from '../Pages/LyfeStylePage'
import { PhotosPage } from '../Pages/PhotosPage'
import { SportsPage } from '../Pages/SportsPage'
import { VideosPage } from '../Pages/VideosPage'
import { ViralNewsPage } from '../Pages/ViralNewsPage'
import { WorlsPage } from '../Pages/WorlsPage'

export const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/latestnews' element={<LatestNewsPage />}/>
        <Route path='/latestnews/:id' element={<LatestNewsSinglePage />}/>
        <Route path='/photos' element={<PhotosPage />}/>
        <Route path='/videos' element={<VideosPage />}/>
        <Route path='/exlpainers' element={<ExplainersPage />}/>
        <Route path='/india' element={<IndiaPage />}/>
        <Route path='/entertainment' element={<EntertainmentPage />}/>
        <Route path='/sports' element={<SportsPage />}/>
        <Route path='/viralnews' element={<ViralNewsPage />}/>
        <Route path='/lifestyle' element={<LyfeStylePage />}/>
        <Route path='/education' element={<EducationPage />}/>
        <Route path='/business' element={<BusinessPage />}/>
        <Route path='/world' element={<WorlsPage />}/>
        <Route path='/admin' element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
    </Routes>
  )
}
