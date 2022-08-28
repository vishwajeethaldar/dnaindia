import { Box } from '@chakra-ui/react'
import React from 'react'
import { AdminMidsection } from '../../Components/Admincomponents/AdminMidsection'
import { Adminnavbar } from '../../Components/Admincomponents/Adminnavbar'
import { Footer } from '../../Components/Footer/Footer'
import {AddSportsNews} from '../../Components/Admincomponents/AddSportsNews'
export const SportsNewsPage = () => {
  return (
    <Box>
    <Adminnavbar />
    <AdminMidsection>
        <AddSportsNews />
    </AdminMidsection>
    <Footer/>
   </Box>
  )
}
