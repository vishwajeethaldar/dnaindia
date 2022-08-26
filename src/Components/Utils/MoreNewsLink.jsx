import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const MoreNewsLink = ({text, link}) => {
  return (
    <Box w="100%" textAlign={'center'}>
        <Link to={link}>
            {text}
        </Link>
    </Box>
  )
}
