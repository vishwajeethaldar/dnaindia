import {Box, Flex, Image,  Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export const HomePageCard = ({path, id,align, justify, imgLink, textFont, newsTitle, flexDir, imgWidth, imgHeight, gap}) => {

  return (
  <Box>
   <Link  to={`/${path}/${id}`}>
    <Flex direction={flexDir} align={align} justify={justify} gap={gap}>
        <Image w={imgWidth} src={imgLink} h={imgHeight}/>
        <Text fontSize={textFont}>{newsTitle}</Text>
    </Flex>
   </Link>
</Box>
  )
}


