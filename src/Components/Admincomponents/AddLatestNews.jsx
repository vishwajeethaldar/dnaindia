import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { EntryForm } from './EntryForm'

export const AddLatestNews = () => {
  return (
    <Box>
        <Box textAlign={'center'} fontSize={['1.4em', '1.6em', '2em']} fontWeight="700" my="20px"> Add Latest News </Box>
        <EntryForm/>
    </Box>
  )
}
