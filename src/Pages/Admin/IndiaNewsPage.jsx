import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'
import {AddIndiaNews} from '../../Components/Admincomponents/AddIndiaNews'
export const IndiaNewsPage = () => {
  return (
    <Box>
    <Adminnavbar />
    <AdminMidsection>
        <AddIndiaNews />
    </AdminMidsection>
    <Footer/>
   </Box>
  )
}
