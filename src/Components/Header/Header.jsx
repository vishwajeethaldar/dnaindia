// import React from 'react';
import {Flex, Box, Button, IconButton } from '@chakra-ui/react';
import {Search2Icon, SearchIcon} from '@chakra-ui/icons';
import BrandLogo from './BrandLogo';
import {Link} from 'react-router-dom';
import { TranslatorButton } from './TranslatorButton';
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
} from '@chakra-ui/react'
import Searchbar from './Searchbar';
function Header() {
  return (
    <Box w={'100%'} bg="primary">
      <Flex w={['98%', '90%', '90%']} mx='auto' h={'60px'} align="center" justify={`space-between`}>
        <Flex>
            <Box w={`80px`} >
              <Link to="/">
                <BrandLogo image="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"/>
              </Link>
            </Box>
            <Box>
              <TranslatorButton />
            </Box>
        </Flex>
        <Box>
          <Popover>
            <PopoverTrigger>
                <IconButton variant='outline' fontSize={`1.5em`} border={`none`}  aria-label='Search database' icon={<SearchIcon />} />
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              {/* <PopoverCloseButton /> */}
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Searchbar />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header