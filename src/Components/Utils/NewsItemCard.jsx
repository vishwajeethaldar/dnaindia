import {Box, Flex, Image,  Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export const NewsItemCard = ({path, id, imgLink, textFont, newsTitle, flexDir, imgWidth, imgHeight, gap}) => {

  return (
  <Box>
   <Link  to={`/${path}/${id}`}>
    <Flex direction={flexDir} gap={gap}>
        <Image w={imgWidth} src={imgLink} h={imgHeight}/>
        <Text fontSize={textFont}>{newsTitle}</Text>
    </Flex>
   </Link>
</Box>
  )
}
