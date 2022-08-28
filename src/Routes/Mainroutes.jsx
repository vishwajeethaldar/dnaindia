import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { SearchResult } from '../Pages/SearchResult'

import { BusinessPage } from '../Pages/BusinessPage'
import {BusinessSinglePage} from '../Pages/Business_Page_Single'
import { EducationPage } from '../Pages/EducationPage'
import {EducationSingleNewsPage} from '../Pages/EducationSingleNewsPage'
import { EntertainmentPage } from '../Pages/EntertainmentPage'
import { EntertainmentSinglePage } from '../Pages/EntertainmentSinglePage'
import { ExplainersPage } from '../Pages/ExplainersPage'
import { ExplainersSinglePage } from '../Pages/ExplainersSinglePage'
import { Homepage } from '../Pages/Homepage'
import { IndiaPage } from '../Pages/IndiaPage'
import { IndiaSinglePage } from '../Pages/IndiaSinglePage'
import { LatestNewsPage } from '../Pages/LatestNewspage'
import { LatestNewsSinglePage } from '../Pages/LatestNewsSinglePage'
import { LyfeStylePage } from '../Pages/LyfeStylePage'
import { LyfeStyleSinglePage } from '../Pages/LyfeStyleSinglePage'
import { PhotosPage } from '../Pages/PhotosPage'
import { PhotosSinglePage } from '../Pages/PhotosSinglePage'
import { SportsPage } from '../Pages/SportsPage'
import { SportsSinglePage } from '../Pages/SportsSinglePage'
import { VideosPage } from '../Pages/VideosPage'
import { VideosSinglePage } from '../Pages/VideosSinglePage'
import { ViralNewsPage } from '../Pages/ViralNewsPage'
import { ViralNewsSinglePage } from '../Pages/ViralNewsSinglePage'
import { WorlsPage } from '../Pages/WorlsPage'
import { WorlsSinglePage } from '../Pages/WorlsSinglePage'
import { TopNewsPage } from '../Pages/TopNewsPage'
import { LoginPage } from '../Pages/Admin/LoginPage'




export const Mainroutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/latestnews' element={<LatestNewsPage />}/>
        <Route path='/latestnews/:id' element={<LatestNewsSinglePage />}/>
        <Route path='/photos' element={<PhotosPage />}/>
        <Route path='/photos/:id' element={<PhotosSinglePage />}/>
        <Route path='/videos' element={<VideosPage />}/>
        <Route path='/videos/:id' element={<VideosSinglePage />}/>
        <Route path='/exlpainers' element={<ExplainersPage />}/>
        <Route path='/explainers/:id' element={<ExplainersSinglePage />}/>
        <Route path='/india' element={<IndiaPage />}/>
        <Route path='/india/:id' element={<IndiaSinglePage />}/>
        <Route path='/entertainment' element={<EntertainmentPage />}/>
        <Route path='/entertainment/:id' element={<EntertainmentSinglePage />}/>
        <Route path='/sports' element={<SportsPage />}/>
        <Route path='/sports/:id' element={<SportsSinglePage/>}/>
        <Route path='/viralnews' element={<ViralNewsPage />}/>
        <Route path='/viralnews/:id' element={<ViralNewsSinglePage />}/>
        <Route path='/lifestyle' element={<LyfeStylePage />}/>
        <Route path='/lifestyle/:id' element={<LyfeStyleSinglePage />}/>
        <Route path='/education' element={<EducationPage />}/>
        <Route path='/education/:id' element={<EducationSingleNewsPage />}/>
        <Route path='/business' element={<BusinessPage />}/>
        <Route path='/business/:id' element={<BusinessSinglePage />}/>
        <Route path='/world' element={<WorlsPage />}/>
        <Route path='/world/:id' element={<WorlsSinglePage />}/>
        <Route path='/search' element={<SearchResult />}/>
        <Route path='/topnews/:id' element={<TopNewsPage/>}/>
        <Route path='/au-login' element={<LoginPage/>}/>

            
    </Routes>
  )
}
