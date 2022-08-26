import { HamburgerIcon } from '@chakra-ui/icons'
import {Stack, Link, Button, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    IconButton,
    PopoverAnchor,Box} from '@chakra-ui/react'
import { LeftNavbar } from './LeftNavbar'

export const LeftNav = () => {
  return (
    
    <Popover isLazy   placement='right' display={['block', 'block', 'none']} >
    <PopoverTrigger>
        <IconButton icon={<HamburgerIcon/>}/>
    </PopoverTrigger>
        <PopoverContent mt="125px" ml="-50px" >
            <PopoverCloseButton />
            <PopoverBody>
                <LeftNavbar/>
            </PopoverBody>
        </PopoverContent>
  </Popover>
  
  )
}
