import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import {AppContext} from '../Context/AppContext'
import { Dashboard } from '../Pages/Admin/Dashboard';
import { LatestNewsPage } from '../Pages/Admin/LatestNewsPage';
import { IndiaNewsPage } from '../Pages/Admin/IndiaNewsPage';
import { BusinessNewsPage } from '../Pages/Admin/BusinessNewsPage';
import { SportsNewsPage } from '../Pages/Admin/SportsNewsPage';
import { WorldNewsPage } from '../Pages/Admin/WorldNewsPage';
import { EntertainmentNewsPage } from '../Pages/Admin/EntertainmentNewsPage';
import { EduationNEwsPage } from '../Pages/Admin/EduationNEwsPage';
import {PrivateRoute} from '../Components/PrivateRoute'
import { PhotoNewsPage } from '../Pages/Admin/PhotoNewsPage';
import { VideoNewsPage } from '../Pages/Admin/VideoNewsPage';
import { LifeStyleNewsPage } from '../Pages/Admin/LifeStyleNewsPage';
import { ViralNewsPage } from '../Pages/Admin/ViralNewsPage';
import { ExplainersNewsPage } from '../Pages/Admin/ExplainersNewsPage';
export const AdminRoutes = () => {
    const {state, dispatch} =  useContext(AppContext);
 

    return (
        <Routes>
            <Route path='/admin' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="admin/latestnews" element={<PrivateRoute><LatestNewsPage /></PrivateRoute>} />
            <Route path="admin/india" element={<PrivateRoute><IndiaNewsPage />  </PrivateRoute>} />
            <Route path="admin/business" element={<PrivateRoute><BusinessNewsPage/> </PrivateRoute>} />
            <Route path="admin/sports" element={<PrivateRoute><SportsNewsPage /> </PrivateRoute>} />
            <Route path="admin/world" element={<PrivateRoute><WorldNewsPage /> </PrivateRoute>} />
            <Route path="admin/education" element={<PrivateRoute><EduationNEwsPage /> </PrivateRoute>} />
            <Route path="admin/entertainment" element={<PrivateRoute><EntertainmentNewsPage /> </PrivateRoute>} />
            <Route path="admin/photos" element={<PrivateRoute><PhotoNewsPage /> </PrivateRoute>} />
            <Route path="admin/videos" element={<PrivateRoute><VideoNewsPage /> </PrivateRoute>} />
            <Route path="admin/lifestyle" element={<PrivateRoute><LifeStyleNewsPage /> </PrivateRoute>} />
            <Route path="admin/viralnews" element={<PrivateRoute><ViralNewsPage /> </PrivateRoute>} />
            <Route path="admin/exlpainers" element={<PrivateRoute><ExplainersNewsPage /> </PrivateRoute>} />
        </Routes>
    )
}
