import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'
// import { AddEducationNews } from '../../Components/Admincomponents/AddEducationNews'
export const LifeStyleNewsPage = () => {
  return (
   <Box>
    <Adminnavbar />
    <AdminMidsection>
        {/* <AddEducationNews /> */}
    </AdminMidsection>
    <Footer/>
   </Box>
  )
}
