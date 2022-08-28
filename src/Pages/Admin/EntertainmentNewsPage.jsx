import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'
import {AddEntertainmentNews} from '../../Components/Admincomponents/AddEntertainmentNews'
export const EntertainmentNewsPage = () => {
  return (
    <Box>
    <Adminnavbar />
    <AdminMidsection>
        <AddEntertainmentNews />
    </AdminMidsection>
    <Footer/>
   </Box>
  )
}
