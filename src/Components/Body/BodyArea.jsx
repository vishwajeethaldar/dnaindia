import React from 'react'
import {Box, Grid, GridItem} from '@chakra-ui/react'
import { LeftNavbar } from '../LeftNavbar/LeftNavbar'
export const BodyArea = () => {
  return (
    <Box w={'100%'}>
        <Grid  w={['98%', '90%', '90%']} mx='auto' templateColumns={['100%','100%','23% 54% 23%']}>
            <GridItem >
              <LeftNavbar />
            </GridItem>

            <GridItem>
                   
            </GridItem>

            <GridItem>
            
            </GridItem>
        </Grid>
    </Box>
  )
}
