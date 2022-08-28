import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { EntryForm } from './EntryForm'

export const AddEducationNews = () => {
  return (
    <Box>
        <Box textAlign={'center'} fontSize={['1.4em', '1.6em', '2em']} fontWeight="700" my="20px"> Add Education News </Box>
        <EntryForm path="education"/>
    </Box>
  )
}
