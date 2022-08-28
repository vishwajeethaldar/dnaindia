import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'
import { AddBusinessNews } from '../../Components/Admincomponents/AddBusinessNews'
export const BusinessNewsPage = () => {
  return (
   <Box>
    <Adminnavbar />
    <AdminMidsection>
        <AddBusinessNews />
    </AdminMidsection>
    <Footer/>
   </Box>
  )
}
