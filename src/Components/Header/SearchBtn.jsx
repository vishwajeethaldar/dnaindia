import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    IconButton,
  } from '@chakra-ui/react'
import Searchbar from './Searchbar'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBtn = () => {
  return (
    <Popover>
    <PopoverTrigger>
        <IconButton variant='outline' fontSize={`1.5em`} border={`none`}  aria-label='Search database' icon={<SearchIcon />} />
    </PopoverTrigger>

    <PopoverContent>
      <PopoverArrow />
      {/* <PopoverCloseButton /> */}
      {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
      <PopoverBody>
        <Searchbar/>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  )
}
