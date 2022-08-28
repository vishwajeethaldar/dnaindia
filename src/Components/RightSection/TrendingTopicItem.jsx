import {Box, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
export const TrendingTopicItem = ({path, text, bgcolor, textColor}) => {
  return (
    <Box bg={bgcolor} color={textColor} py="10px" textAlign={'center'} fontSize="1.2em" borderRadius={'10px'}>
        <Link to={path}>
            <Text> {text} </Text>
        </Link>
    </Box>
  )
}
