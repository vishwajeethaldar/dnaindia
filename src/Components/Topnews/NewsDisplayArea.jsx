import {Box, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NewsDisplayArea = ({newsTitle, width, height}) => {
//  console.log(newsTitle);
  return (
    newsTitle?
    <Box w={width} lineHeight={height} overflow={'hidden'}>
    <Link to={`/topnews/${newsTitle.id}`} >
        <Text  pl='15px' color='light'> {newsTitle.title}</Text>
    </Link>
    </Box>
    :
    console.log("not Loaded")
  )
}
