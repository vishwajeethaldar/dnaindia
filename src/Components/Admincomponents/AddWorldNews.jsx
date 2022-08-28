import { Box } from '@chakra-ui/react'
import React from 'react'
import { EntryForm } from './EntryForm'

export const AddWorldNews = () => {
  return (
    <Box>
        <Box textAlign={'center'} fontSize={['1.4em', '1.6em', '2em']} fontWeight="700" my="20px"> Add World News </Box>
        <EntryForm path="world"/>
    </Box>
  )
}
