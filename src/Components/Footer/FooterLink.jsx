import {Link} from 'react-router-dom';

import {Flex, Box} from '@chakra-ui/react';
export const FooterLink = ({path, text, borderRht}) => {
  return (
    <Box as="div" color='light' key={path}>
        <Flex>
        <Link mx="15px" to={path} replace={true} > {text} </Link>
        <Box as="p" pl="15px" borderRight={borderRht?{sm:'1px solid #fff', md:'1px solid #fff',lg:'none'}:'none'}>  </Box>
        </Flex>
    </Box>
  )
}
