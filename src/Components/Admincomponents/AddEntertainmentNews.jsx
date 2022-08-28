import { Box } from '@chakra-ui/react'
import React from 'react'
import { EntryForm } from './EntryForm'
export const AddEntertainmentNews = () => {
  return (
    <Box>
        <Box textAlign={'center'} fontSize={['1.4em', '1.6em', '2em']} fontWeight="700" my="20px"> Add Entertainment News </Box>
        <EntryForm path="entertainment "/>
    </Box>
  )
}
