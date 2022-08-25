import React, { useContext, useEffect } from 'react'
import {Box, Grid, GridItem} from '@chakra-ui/react'
import { LeftNavbar } from '../LeftNavbar/LeftNavbar'
import { RightSection } from '../RightSection/RightSection'
import { MiddleSection } from '../MiddleSection/MiddleSection'
import { AppContext } from '../../Context/AppContext'
import { ACTIONTYPES } from '../../Context/actiontypes'
export const BodyArea = () => {
  
  return (
    <Box w={'100%'} >
        <Grid  w={['98%', '90%', '90%']} mx='auto' templateColumns={['100%','100%','23% 50% 27%']}>
            <GridItem >
              <LeftNavbar />
            </GridItem>

            <GridItem>
                  <MiddleSection children={{first:{LeftNavbar}, second:{RightSection}}}/>
                   
                 
            </GridItem>
            <GridItem>
              <RightSection />
            </GridItem>
        </Grid>
    </Box>
  )
}
