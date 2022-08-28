import React from 'react'
import {Box, Grid, GridItem} from '@chakra-ui/react'
export const MiddleSection = (props) => {
  const {LeftNavbar} = props.children.first
  return (
    <Box>
      <props.children.first.LeftNavbar />
    </Box>
  )
}
