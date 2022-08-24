import {Flex, Image, Text} from '@chakra-ui/react';

export const NewsItemCard = ({imgLink, newsTitle, flexDir, imgWidth}) => {
  return (
    
    <Flex direction={flexDir}>
        <Image w={imgWidth} src={imgLink}/>
        <Text>{newsTitle}</Text>
    </Flex>
  )
}
