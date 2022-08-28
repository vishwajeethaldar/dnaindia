import React from 'react'
import 'draft-js/dist/Draft.css';
import RichTextEditor from './RichTextEditor';
import {Adminnavbar} from '../../Components/Admincomponents/Adminnavbar'
import {Footer} from '../../Components/Footer/Footer'
import {AdminMidsection} from '../../Components/Admincomponents/AdminMidsection'
import {AddLatestNews} from '../../Components/Admincomponents/AddLatestNews'
export const Dashboard = () => {
  return (
    <div>
       <Adminnavbar/>
       <AdminMidsection>
        <AddLatestNews />
       </AdminMidsection>
       <Footer />
    </div>
  )
}
