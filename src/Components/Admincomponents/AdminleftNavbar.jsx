import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { MenuItem } from '../LeftNavbar/MenuItem'
import { menus } from './NavbLinks'
export const AdminleftNavbar = () => {
  return (
    <Box>
        <Flex direction={'column'} gap="15px" px="12px" my="15px" boxShadow={'base'} w="">
            {menus.map((item)=>{
                return (
                    <MenuItem  path={item.path} url={item.url} text={item.text}/>
                )
            })}
        </Flex>
    </Box>
  )
}
