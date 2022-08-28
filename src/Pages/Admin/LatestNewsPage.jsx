import { Box } from '@chakra-ui/react'
import React from 'react'
import { AddLatestNews } from '../../Components/Admincomponents/AddLatestNews'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'

export const LatestNewsPage = () => {
  return (
    <Box>
        <Adminnavbar/>
       <AdminMidsection>
            <AddLatestNews/>
       </AdminMidsection>
        <Footer />
    </Box>  
  )
}
