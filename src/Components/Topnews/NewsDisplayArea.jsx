import {Box, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NewsDisplayArea = ({newsTitle, width, height}) => {
//  console.log(newsTitle);
  return (
    <Box w={width} lineHeight={height}>
    <Link to="/">
        <Text pl='15px' color='light'> {newsTitle&&newsTitle.title}</Text>
    </Link>
    </Box>
  )
}
