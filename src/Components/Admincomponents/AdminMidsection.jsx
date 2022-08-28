import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { AdminleftNavbar } from './AdminleftNavbar'

export const AdminMidsection = ({children}) => {
  return (
   <Grid templateColumns={['100%', '100%', '20% 80%']}>
        <GridItem>
                    <AdminleftNavbar/>
        </GridItem>

        <GridItem px="50px">
           <Box my="30px" w={['90%', '90%', '60%']} boxShadow="lg" mx="auto" p="30px" border={'1px solid #ccc'}>
           {children}
           </Box>
        </GridItem>
   </Grid>
  )
}
